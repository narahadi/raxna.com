<script setup lang="ts">
useHead({
  link: [
    { rel: 'icon', href: 'img/nara-logo-white-bg.png'},
  ],
})
import type { Container } from 'tsparticles-engine'
const zoom = ref(4)
const skills = [
  { icon: '🤖', title: 'AI & Machine Learning', description: 'Developing cutting-edge AI solutions for predictive analytics and process automation.' },
  { icon: '📊', title: 'Data Analytics', description: 'Transforming raw data into actionable insights for informed decision-making.' },
  { icon: '☁️', title: 'Cloud Architecture', description: 'Designing scalable and secure cloud infrastructures for optimal performance.' },
  { icon: '♟️', title: 'Tech Strategy', description: 'Aligning technology initiatives with business goals for sustainable growth.' },
  { icon: '📋', title: 'Project Management', description: 'Leading complex tech projects from conception to successful implementation.' },
  { icon: '💻', title: 'Full-Stack Development', description: 'Building robust web applications with modern technologies and best practices.' },
];

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
  <div class="bg-black text-gray-200 min-h-screen">
  <div id="hero" class="flex items-center justify-center h-screen relative overflow-hidden">
      <NuxtParticles
        id="tsparticles"
        :options="options"
        @load="onLoad"
        class="absolute inset-0 z-0"
      >
      </NuxtParticles>
      <div class="text-center z-10">
        <img src="/img/nara-profile.jpg" alt="Nara" class="w-48 h-48 rounded-full mx-auto mb-8 object-cover border-4 border-primary">
        <h1 class="text-6xl font-bold mb-4 gradient-text">
          Hi there, I'm Nara<span class="typing-cursor">|</span>
        </h1>
        <p class="text-2xl mb-8">Lorem ipsum doloret</p>
        <button class="bg-primary text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-secondary transition-colors duration-200">
          See My Journey
        </button>
      </div>
    </div>
    <nav class="fixed top-0 left-0 right-0 z-50 py-4 bg-gray-900 bg-opacity-90 backdrop-filter backdrop-blur-lg">
      <div class="container mx-auto flex justify-between items-center px-4">
        <a href="#" class="text-2xl font-bold gradient-text">Nara</a>
        <div class="space-x-6">
          <a href="#about" class="hover:text-primary transition-colors duration-200">About</a>
          <a href="#journey" class="hover:text-primary transition-colors duration-200">My Journey</a>
          <a href="#skills" class="hover:text-primary transition-colors duration-200">Skills</a>
          <a href="#contact" class="hover:text-primary transition-colors duration-200">Contact</a>
        </div>
      </div>
    </nav>
    <main class="container mx-auto px-4 py-20 content-wrapper">
      <section id="about" class="mb-32">
        <h2 class="text-4xl font-bold mb-8 gradient-text">About Me</h2>
        <p class="text-xl leading-relaxed">
          I'm a versatile technologist with a passion for solving complex problems. With over 9 years of experience in the tech industry, I've worn many hats - from data analyst, project manager, enterprise account delivery lead to C-level technology leadership. My journey has taken me through startups, multinational corporations, and government projects, giving me a unique perspective on how technology can drive business success and innovation. I specialize in leveraging cutting-edge technologies to drive business growth and innovation.
        </p>
      </section>
      <section id="journey" class="mb-32">
        <div class="h-96 rounded-lg overflow-hidden">
          <LMap
            ref="map"
            :zoom="zoom"
            :center="[-2.109375, 118.125]"
            :use-global-leaflet="false"
          >
            <LTileLayer
              url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
              attribution="&amp;copy; OpenStreetMap, &amp;copy; CartoDB"
              layer-type="base"
              name="OpenStreetMap"
            />
          </LMap>
        </div>
      </section>
      <section id="skills" class="mb-32">
        <h2 class="text-4xl font-bold mb-8 gradient-text text-center">My Expertise</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div v-for="skill in skills" :key="skill.title" class="skill-card bg-darkCard p-6 rounded-xl">
            <div class="text-4xl text-primary mb-4">{{ skill.icon }}</div>
            <h3 class="skill-title text-xl font-semibold mb-2 gradient-text">{{ skill.title }}</h3>
            <p class="skill-description text-gray-400">{{ skill.description }}</p>
          </div>
        </div>
      </section>
    </main>
    <footer class="bg-gray-800 py-8">
      <div class="container mx-auto text-center">
        <p>&copy; 2024 Nara. All rights reserved.</p>
      </div>
    </footer>
  </div>
</template>

<style scoped>

</style>
