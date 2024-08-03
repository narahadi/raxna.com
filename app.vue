<script setup lang="ts">
useHead({
  link: [
    { rel: 'icon', href: 'img/nara-logo-white-bg.png'},
  ],
})
useServerHead({
    bodyAttrs: {
      class: 'bg-bg'
    },
  })
const typedText = ref('')
const fullText = ["Hi there, I'm ", "Nara"]
const pauseDuration = 500
const isTypingFinished = ref(false)

onMounted(() => {
  let partIndex = 0
  let charIndex = 0
  let typingInterval: number | null = null

  function typeNextChar() {
    if (partIndex < fullText.length) {
      if (charIndex < fullText[partIndex].length) {
        typedText.value += fullText[partIndex][charIndex]
        charIndex++
        if (fullText[partIndex][charIndex - 1] === ',') {
          if (typingInterval) clearInterval(typingInterval)
          setTimeout(() => {
            typingInterval = setInterval(typeNextChar, 150)
          }, pauseDuration)
        }
      } else {
        if (partIndex === 0) {
          typedText.value += '<span class="text-accent">'
        } else if (partIndex === fullText.length - 1) {
          typedText.value += '</span>'
        }
        partIndex++
        charIndex = 0
      }
    } else {
      if (typingInterval) clearInterval(typingInterval)
      isTypingFinished.value = true
    }
  }

  typingInterval = setInterval(typeNextChar, 150)
})

const scrollToSection = (sectionId: string) => {
  const element = document.getElementById(sectionId)
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' })
  }
}
</script>

<template>
  <div class="bg-bg min-h-screen">
    <div id="hero" class="flex items-center justify-center h-screen relative overflow-hidden">
      <Universe />
      <div class="text-center z-10 max-w-3xl px-4">
        <img src="/img/nara-profile.jpg" alt="Nara" class="w-48 h-48 rounded-full mx-auto mb-8 object-cover border-4 border-accent">
        <h1 class="text-6xl font-bold mb-4 text-text">
          <span v-html="typedText"></span><span class="typing-cursor" :class="{ 'hidden': isTypingFinished }">|</span>
        </h1>
        <p class="text-xl mb-8 text-text-secondary">Problem-solver at heart, driven by technology's potential for impact. My diverse startup and enterprise experience has honed my ability to tackle complex tech and business challenges, turning ideas into practical solutions</p>
        <div class="flex justify-center space-x-4">
          <button @click="scrollToSection('timeline')" class="bg-accent text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-secondary transition-colors duration-200">
            See My Journey
          </button>
          <button @click="scrollToSection('contact')" class="bg-black text-accent border-2 border-accent px-8 py-3 rounded-lg text-lg font-semibold hover:bg-accent hover:text-white transition-colors duration-200">
            Get in Touch
          </button>
        </div>
      </div>
    </div>
    <main class="container mx-auto px-4 content-wrapper">
      <Timeline id="timeline"/>
      <client-only>
        <Globe />
      </client-only>
      <Skills />
      <Contact />
    </main>
    <Footer />
  </div>
</template>