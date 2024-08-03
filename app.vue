<script setup lang="ts">
useHead({
  link: [
    { rel: 'icon', href: 'img/nara-logo-white-bg.png'},
  ],
})
</script>

<template>
  <div class="bg-bg min-h-screen">
    <div id="hero" class="flex items-center justify-center h-screen relative overflow-hidden">
      <Universe />
      <div class="text-center z-10">
        <img src="/img/nara-profile.jpg" alt="Nara" class="w-48 h-48 rounded-full mx-auto mb-8 object-cover border-4 border-accent">
        <h1 class="text-6xl font-bold mb-4 text-text">
          Hi & there, I'm Nara<span class="typing-cursor">|</span>
        </h1>
        <p class="text-2xl mb-8 text-text">Lorem ipsum doloret</p>
        <button class="bg-accent text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-secondary transition-colors duration-200">
          See My Journey
        </button>
      </div>
    </div>
    <main class="container mx-auto px-4 py-20 content-wrapper">
      <section id="about" class="mb-32 text-text">
        <h2 class="text-4xl font-bold mb-8 text-accent">About Me</h2>
        <p class="text-xl leading-relaxed">
          I'm a versatile technologist with a passion for solving complex problems. With over 9 years of experience in the tech industry, I've worn many hats - from data analyst, project manager, enterprise account delivery lead to C-level technology leadership. My journey has taken me through startups, multinational corporations, and government projects, giving me a unique perspective on how technology can drive business success and innovation. I specialize in leveraging cutting-edge technologies to drive business growth and innovation.
        </p>
      </section>
      <Timeline />
      <Globe />
      <Skills />
    </main>
    <footer class="bg-bg-secondary py-8">
      <div class="container mx-auto text-center text-text-secondary">
        <p>&copy; 2024 Nara. All rights reserved.</p>
      </div>
    </footer>
  </div>
</template>