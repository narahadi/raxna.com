
<script setup lang="ts">
const timelineItems = [
  {
    title: "Partner Support Intern at KFIT",
    date: "Aug 2015 - Jan 2016",
    description: "My tech journey began at a fitness platform startup. As an intern, I managed partner details and explored photo editing. The company's pivot to a voucher-selling platform by the end of my internship was my first taste of the dynamic tech world."
  },
  {
    title: "Partner Manager at Fave",
    date: "Sep 2016 - May 2017",
    description: "Returning to the rebranded company, I found myself in the midst of a massive migration effort following an acquisition. I managed partners across different regions, mastering stakeholder management and cross-cultural communication during a period of significant change."
  },
  {
    title: "Growth Planner at Fave",
    date: "May 2017 - Jan 2018",
    description: "My aptitude for numbers led me to Growth Planning. I graduated from spreadsheets to advanced data analysis tools as our data grew exponentially. I learned to leverage data storytelling to influence key growth strategies and shape the company's direction."
  },
  {
    title: "Consultant at IBM",
    date: "Jan 2018 - Aug 2019",
    description: "At IBM, I dove into diverse projects spanning predictive modeling to business analysis across various industries. I collaborated with academics, implemented complex algorithms, and explored data engineering. This period rapidly expanded my technical skills and ability to bridge business needs with technical solutions."
  },
  {
    title: "Co-founder of TAN",
    date: "Dec 2018",
    description: "While consulting, I co-founded TAN with high school friends. Our mission was to develop an app for selling residential solar panels, allowing me to apply my growing tech skills to sustainable energy - a cause I'm passionate about."
  },
  {
    title: "Optimization Engineer in Thailand",
    date: "Aug 2019 - Mar 2020",
    description: "I tackled a challenging optimization project in Thailand, deciphering complex scripts and translating intricate business logic into models. We developed hybrid approaches and built an ecosystem to push our tools to their limits."
  },
  {
    title: "Senior Consultant at IBM Indonesia",
    date: "Mar 2020 - Dec 2021",
    description: "Back in Indonesia during the pandemic, I worked on critical projects ranging from AI models for document processing to industry prediction models. I helped define data-driven organizational roadmaps and developed an OCR system. This diverse experience reinforced the power of transferable skills and adaptability."
  },
  {
    title: "CTO at TAN Digital",
    date: "Dec 2021 - Jan 2024",
    description: "TAN pivoted to become a software house and IT consulting company. As CTO, I led our tech direction, starting with project to digitize operations for a large enterprise in the telecommunications sector. I architected cloud solutions, optimized databases, and led government projects, balancing technical expertise with strategic thinking and leadership."
  },
  {
    title: "Tech Advisor at KITA",
    date: "Feb 2023 - Sep 2023",
    description: "Alongside my CTO role, I advised a startup supporting mothers. I helped reduce engineering costs, introduced best practices, and implemented an AI chatbot. This role allowed me to apply enterprise-level experience to startup challenges, coming full circle from my own startup beginnings."
  },
  {
    title: "Co-Founder / Various Role at TAN Digital",
    date: "Jan 2024 - Present",
    description: "As our engineering team matured, I transitioned to a broader role. Now, I manage key accounts, lead critical project deliveries, and contribute to our strategic direction. This allows me to leverage my technical background and leadership skills across technology, operations, and business strategy."
  },
  {
    title: "Tech Advisor at Novus Integratio",
    date: "Jul 2024 - Present",
    description: "My latest venture involves implementing cutting-edge AI solutions for automated report generation at an Estonia-based company. I'm helping build a full-stack web application that integrates modern technologies with AI capabilities, synthesizing my technical skills, product development experience, and strategic thinking."
  }
]
</script>

<template>
<section id="experience" class="mb-16 relative">
    <h2 class="text-4xl font-bold mb-12 text-accent text-center">My Journey</h2>
    <div class="timeline relative max-w-6xl mx-auto">
    <div class="absolute left-1/2 top-0 bottom-0 w-0.5 bg-accent transform -translate-x-1/2"></div>
    <div v-for="(item, index) in timelineItems" :key="index" 
            class="timeline-item relative mb-24 flex items-center">
        <div class="absolute left-1/2 w-6 h-6 bg-accent rounded-full transform -translate-x-1/2 border-2 border-bg-white"></div>
        <div :class="[
        'w-[calc(50%-2rem)] bg-bg-secondary p-6 rounded-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-accent/20',
        index % 2 === 0 ? 'ml-auto pl-10' : 'mr-auto pr-10'
        ]">
        <h3 class="text-2xl font-bold mb-3 text-accent">{{ item.title }}</h3>
        <p class="text-base text-text mb-4 leading-relaxed">{{ item.description }}</p>
        <p class="text-sm text-text-secondary font-medium">{{ item.date }}</p>
        </div>
    </div>
    </div>
</section>
</template>