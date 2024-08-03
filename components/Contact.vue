<script setup lang="ts">
const email = 'narahadim@gmail.com'
const calendarLink = 'https://calendar.app.google/cSttHZuDev3af1k1A'
</script>

<template>
  <section id="contact" class="mb-32">
    <h2 class="text-4xl font-bold mb-8 text-accent">Beyond Work</h2>
    <div class="bg-bg-secondary p-6 relative rounded-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-accent/20">
      <p class="text-text mb-4 leading-relaxed">
        Outside of work, I'm a sports enthusiast and adventurer. I enjoy cycling, running, golf, and football. When I'm not exercising, I'm often exploring new places or enjoying a good cup of coffee - experiences I like to share on my Instagram. Lately, though, my social media has been quieter as I've been immersed in exciting new tech projects.
      </p>
      <p class="text-text mb-4 leading-relaxed">
        The world of technology, especially with tools like Cursor and Claude, has rekindled my excitement for building and creating. While I don't have much to show yet, I plan to share my work on GitHub in the future. I'm also learning to write more, with the intention of sharing insights on LinkedIn and possibly starting to post on Twitter, though I haven't begun this yet.
      </p>
      <p class="text-text mb-6 leading-relaxed">
        If you'd like to connect, discuss potential collaborations, or even seek mentoring, I'm always open to new opportunities. You can reach out to me via <a :href="`mailto:${email}`" class="text-accent hover:underline">email</a> or <a :href="calendarLink" target="_blank" rel="noopener noreferrer" class="text-accent hover:underline">schedule a 30-minute call</a>.
      </p>
    </div>
  </section>
</template>