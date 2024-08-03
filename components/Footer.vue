<script setup lang="ts">
const socials = [
    { name: 'Instagram', icon: 'mdi:instagram', url: 'https://instagram.com/narahadim' },
    { name: 'LinkedIn', icon: 'mdi:linkedin', url: 'https://linkedin.com/in/narahadi' },
    { name: 'Twitter', icon: 'mdi:twitter', url: 'https://twitter.com/narahadim' },
    { name: 'Github', icon: 'mdi:github', url: 'https://github.com/narahadi' },
]
</script>

<template>
<footer class="bg-bg-secondary py-4">
    <div class="container mx-auto text-center text-text-secondary px-4">
        <div class="flex flex-col sm:flex-row items-center justify-between space-y-4 sm:space-y-0">
            <p>&copy; 2024 Nara. All rights reserved.</p>
            <nav aria-label="Social media links">
                <ul class="flex space-x-4 list-none p-0">
                    <li v-for="social in socials" :key="social.name">
                        <a :href="social.url" 
                           target="_blank" 
                           rel="noopener noreferrer" 
                           class="text-text-secondary hover:text-accent transition-colors duration-200"
                           :aria-label="`Follow Nara on ${social.name}`">
                            <Icon :name="social.icon" size="24" aria-hidden="true" />
                            <span class="sr-only">{{ social.name }}</span>
                        </a>
                    </li>
                </ul>
            </nav>
        </div>
    </div>
</footer>
</template>