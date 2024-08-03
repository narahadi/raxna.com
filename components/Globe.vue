<script setup lang="ts">
const globeContainer = ref<HTMLElement | null>(null)
let globeInstance: any = null
let resizeObserver: ResizeObserver | null = null

onMounted(async () => {
  if (process.client && globeContainer.value) {
    const Globe = (await import('globe.gl')).default
    const cities = [
      { name: 'Jakarta', lat: -6.2088, lng: 106.8456 },
      { name: 'Kuala Lumpur', lat: 3.1390, lng: 101.6869 },
      { name: 'Bangkok', lat: 13.7563, lng: 100.5018 },
      { name: 'Vienna', lat: 48.2082, lng: 16.3738 },
      { name: 'Tallinn', lat: 59.4370, lng: 24.7536 },
      { name: 'Berlin', lat: 52.5200, lng: 13.4050 }
    ]

    globeInstance = Globe()(globeContainer.value)
      .globeImageUrl('//unpkg.com/three-globe/example/img/earth-night.jpg')
      .backgroundColor('rgba(0,0,0,0)')
      .pointsData(cities)
      .pointColor(() => '#00BFBF')
      .pointAltitude(0)
      .pointRadius(0.5)
      .pointsMerge(true)
      .pointResolution(64)
      .pointLabel('name')
      .labelColor(() => '#FFFFFF')
      .labelDotRadius(0.5)
      .labelAltitude(0.01)
      .labelSize(1.5)
      .labelResolution(64)

    const arcs = cities.slice(1).map(city => ({
      startLat: cities[0].lat,
      startLng: cities[0].lng,
      endLat: city.lat,
      endLng: city.lng,
    }))

    globeInstance.arcsData(arcs)
      .arcColor(() => '#00BFBF')
      .arcAltitude(0)
      .arcStroke(0.5)
      .arcDashLength(0.4)
      .arcDashGap(0.2)
      .arcDashAnimateTime(2000)

    // Center the view on the cities
    const { lat, lng } = getCenterCoordinates(cities)
    globeInstance.pointOfView({ lat, lng, altitude: 2.5 }, 1000)

    globeInstance.controls().enableZoom = false
    globeInstance.controls().autoRotate = true
    globeInstance.controls().autoRotateSpeed = 0.5
    globeInstance.controls().minDistance = 300
    globeInstance.controls().maxDistance = 300

    resizeObserver = new ResizeObserver(() => {
      if (globeContainer.value) {
        globeInstance.width(globeContainer.value.clientWidth)
        globeInstance.height(globeContainer.value.clientHeight)
      }
    })
    resizeObserver.observe(globeContainer.value)
  }
})

onUnmounted(() => {
  if (resizeObserver) {
    resizeObserver.disconnect()
  }
  if (globeContainer.value) {
    const canvas = globeContainer.value.querySelector('canvas')
    if (canvas) {
      canvas.remove()
    }
  }
  globeInstance = null
})

function getCenterCoordinates(cities: { lat: number; lng: number }[]) {
  const latSum = cities.reduce((sum, city) => sum + city.lat, 0)
  const lngSum = cities.reduce((sum, city) => sum + city.lng, 0)
  return {
    lat: latSum / cities.length,
    lng: lngSum / cities.length
  }
}

</script>

<template>
<div ref="globeContainer" class="w-full h-full flex items-center justify-center"/>
</template>
