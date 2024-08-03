<script setup lang="ts">
const skills = [
  {
    icon: 'robot',
    title: 'Data & AI',
    description: 'Developing AI models for predictive analytics, optimizing processes, and transforming raw data into actionable insights.'
  },
  {
    icon: 'cloud',
    title: 'Cloud & Architecture',
    description: 'Designing scalable infrastructures across cloud, on-premise, and hybrid environments, optimizing for performance, security, and cost-efficiency.'
  },
  {
    icon: 'chess',
    title: 'Tech Strategy',
    description: 'Crafting technology roadmaps that align with business goals and drive sustainable growth.'
  },
  {
    icon: 'tasks',
    title: 'Project Management',
    description: 'Guiding complex tech projects from conception to successful implementation, on time and on budget.'
  },
  {
    icon: 'code',
    title: 'Full-Stack Development',
    description: 'Building robust web applications end-to-end when needed, though mobile apps are still on my learning list.'
  }
]
</script>

<template>
<section id="skills" class="mb-32">
    <h2 class="text-4xl font-bold mb-8 text-accent">Skills Forged Along the Way</h2>
    <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
    <div v-for="skill in skills" :key="skill.title" class="skill-card bg-bg-secondary p-4 rounded-xl flex flex-col items-center text-center">
        <div class="text-4xl text-accent mb-3 flex items-center justify-center h-16">
        <font-awesome :icon="skill.icon"/>
        </div> 
        <h3 class="skill-title text-lg font-semibold mb-2 text-accent">{{ skill.title }}</h3>
        <p class="skill-description text-text-secondary text-sm leading-tight">{{ skill.description }}</p>
    </div>
    </div>
</section>
</template>