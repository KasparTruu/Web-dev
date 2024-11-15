<template>
  <section id="clients" class="py-12 px-4 md:px-8 lg:px-16 bg-black text-white">
    <div class="text-center mb-12">
      <h3 class="text-4xl font-light text-gray-100">What my <span class="italic text-gray-400">clients say</span></h3>
      <p class="text-gray-400 mt-4">See what my clients have to say about working with me and the results I helped them achieve.</p>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      <!-- Each testimonial card -->
      <div
        v-for="(testimonial, index) in testimonials"
        :key="index"
        class="bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200"
      >
        <!-- Logo and Title -->
        <div class="flex items-center mb-4">
          <img :src="require(`@/assets/${testimonial.logo}`)" alt="Logo" class="w-8 h-8 mr-3">
          <h2 class="text-lg font-semibold text-gray-100">{{ testimonial.title }}</h2>
        </div>

        <!-- Testimonial Text -->
        <p class="text-sm text-gray-400 mb-6">{{ testimonial.text }}</p>

        <!-- Client Info -->
        <div class="flex items-center mt-auto">
          <div class="text-sm">
            <p class="font-semibold text-white">{{ testimonial.name }}</p>
            <p class="text-gray-500">{{ testimonial.company }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const testimonials = [
  {
    logo: 'logo1.png', // replace with the actual filename
    title: "Amazing Results with Kaspar's Premium Web Design Services",
    text: "Kaspar is a top-notch web designer who created a stunning website for my business...",
    name: 'John Smith',
    company: 'ABC Company',
  },
  {
    logo: 'logo2.png',
    title: "Professional, Collaborative Web Design Experience with Kaspar",
    text: "I had the pleasure of working with Kaspar on a website development project...",
    name: 'Karen Lee',
    company: 'Tech Innovations',
  },
  {
    logo: 'logo3.png',
    title: "Expert Webflow and SEO Services: Excellent Work, Great Results",
    text: "Working with Kaspar on my website redesign was a fantastic experience...",
    name: 'David Kim',
    company: 'Digital Agency',
  },
  // Add additional testimonials as needed
];
</script>

<style scoped>
/* Additional styling, if needed */
</style>
