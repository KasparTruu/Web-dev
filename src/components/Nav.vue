<script setup>
function scrollToSection(sectionId) {
  const target = document.getElementById(sectionId);
  if (target) {
    target.scrollIntoView({
      behavior: 'smooth', // Smooth scrolling
      block: 'start', // Align to the top of the section
    });
  }
}
</script>

<template>
  <header class="bg-black p-4 fixed w-full top-0 z-50">
    <div class="container mx-auto flex justify-between items-center">
      <h1 class="text-3xl font-light">Kaspar<span class="text-gray-400">.</span></h1>
      <nav class="hidden md:flex space-x-6 text-gray-300">
        <a href="#services" class="hover:text-white transition-colors">SERVICES</a>
        <a href="#work" class="hover:text-white transition-colors">WORK</a>
        <a href="#about" class="hover:text-white transition-colors">ABOUT</a>
        <button
          @click="scrollToSection('shine')"
          class="bg-gray-800 text-white px-4 py-2 rounded-lg hover:bg-gray-700 transition"
        >
          LET'S TALK
        </button>
      </nav>
    </div>
  </header>
</template>
