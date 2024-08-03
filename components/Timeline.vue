
<script setup lang="ts">
const timelineItems = [
    {
        title: "Partner Support Intern",
        date: "2015 - 2016",
        description: "Started my journey in the tech industry, learning the ropes of customer support and partner management."
    },
    {
        title: "Partner Manager at Fave",
        date: "2016 - 2017",
        description: "Managed key partnerships, driving growth and improving partner satisfaction."
    },
    {
        title: "Growth Planner at Fave",
        date: "2017 - 2018",
        description: "Developed and implemented strategies to accelerate company growth."
    },
    {
        title: "Consultant",
        date: "2018",
        description: "Provided expert advice to businesses on technology implementation and digital transformation."
    },
    {
        title: "Optimization Engineer",
        date: "2018 - 2019",
        description: "Focused on improving efficiency and performance of technical systems and processes."
    },
    {
        title: "Senior Consultant",
        date: "2019 - 2021",
        description: "Led complex consulting projects, providing high-level strategic advice to clients."
    },
    {
        title: "Tech Advisor",
        date: "2023",
        description: "Offered strategic technology guidance to startups and established companies."
    },
    {
        title: "Tech Advisor",
        date: "2024 - Present",
        description: "Continuing to provide expert technology advice and guidance to various organizations."
    },
    {
        title: "Co-founder / CTO",
        date: "2021 - Present",
        description: "Leading technology strategy and implementation in a startup environment."
    }
]
</script>

<template>
  <section id="experience" class="mb-16 relative">
    <h2 class="text-4xl font-bold mb-12 text-accent text-center">My Journey</h2>
    <div class="timeline relative max-w-4xl mx-auto">
      <div class="absolute left-1/2 top-0 bottom-0 w-0.5 bg-accent transform -translate-x-1/2"></div>
      <div v-for="(item, index) in timelineItems" :key="index" 
           class="timeline-item relative mb-16 flex items-center">
        <div class="absolute left-1/2 w-4 h-4 bg-accent rounded-full transform -translate-x-1/2"></div>
        <div :class="[
          'w-[calc(50%-1rem)] bg-bg-secondary p-4 rounded-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-accent/20',
          index % 2 === 0 ? 'ml-auto pl-8' : 'mr-auto pr-8'
        ]">
          <h3 class="text-xl font-bold mb-2 text-accent">{{ item.title }}</h3>
          <p class="text-sm text-text mb-2">{{ item.description }}</p>
          <p class="text-xs text-text-secondary">{{ item.date }}</p>
        </div>
      </div>
    </div>
  </section>
</template>