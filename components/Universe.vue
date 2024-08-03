<script setup lang="ts">
import type { Container } from 'tsparticles-engine'

const options = {
  particles: {
    number: {
      value: 300,
      density: {
        enable: true
      }
    },
    color: {
      value: "#ffffff"
    },
    shape: {
      type: "circle"
    },
    opacity: {
      value: { min: 0.1, max: 0.8 },
      animation: {
        enable: true,
        speed: 1,
        sync: false,
        startValue: "random",
        minimize: { enable: true, value: 0.1 }
      }
    },
    size: {
      value: { min: 0.1, max: 3 },
      animation: {
        enable: true,
        speed: 1,
        sync: false,
        startValue: "random",
        minimize: { enable: true, value: 0.1 }
      }
    },
    move: {
      enable: true,
      speed: 0.5,
      direction: "right",
      random: false,
      straight: false,
      outModes: {
        default: "out"
      },
    },
    links: {
      enable: false
    }
  },
  interactivity: {
    detectsOn: "canvas",
    events: {
      onHover: {
        enable: true,
        mode: "grab"
      },
      onClick: {
        enable: true,
        mode: "repulse"
      },
      resize: true
    },
    modes: {
      grab: {
        distance: 100,
        size: 5,
        duration: 2,
        opacity: 0.8,
        speed: 3
      },
      repulse: {
        distance: 200,
        duration: 0.4
      }
    }
  },
  detectRetina: true
}

const onLoad = (container: Container) => {
  container.pause()
  setTimeout(() => container.play(), 2000)
}
</script>

<template>
  <NuxtParticles
    id="tsparticles"
    :options="options"
    @load="onLoad"
    class="absolute inset-0 z-0"
  >
  </NuxtParticles>
</template>