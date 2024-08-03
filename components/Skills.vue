<script setup lang="ts">
const skills = [
  { icon: 'robot', title: 'AI & Machine Learning', description: 'Developing cutting-edge AI solutions for predictive analytics and process automation.' },
  { icon: 'chart-line', title: 'Data Analytics', description: 'Transforming raw data into actionable insights for informed decision-making.' },
  { icon: 'cloud', title: 'Cloud Architecture', description: 'Designing scalable and secure cloud infrastructures for optimal performance.' },
  { icon: 'chess', title: 'Tech Strategy', description: 'Aligning technology initiatives with business goals for sustainable growth.' },
  { icon: 'tasks', title: 'Project Management', description: 'Leading complex tech projects from conception to successful implementation.' },
  { icon: 'code', title: 'Full-Stack Development', description: 'Building robust web applications with modern technologies and best practices.' },
];
</script>

<template>
  <section id="skills" class="mb-32">
    <h2 class="text-4xl font-bold mb-8 gradient-text text-center text-accent">My Expertise</h2>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      <div v-for="skill in skills" :key="skill.title" class="skill-card bg-bg-secondary p-6 rounded-xl">
        <div class="text-4xl text-accent mb-4">
          <font-awesome :icon="skill.icon"/>
        </div> 
        <h3 class="skill-title text-xl font-semibold mb-2 gradient-text text-accent">{{ skill.title }}</h3>
        <p class="skill-description text-text-secondary">{{ skill.description }}</p>
      </div>
    </div>
  </section>
</template>