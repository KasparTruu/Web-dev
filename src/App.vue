<script setup lang="ts">
import Clients from './components/Clients.vue';
import Services from './components/Services.vue';
import Work from './components/Work.vue';
import Myself from './components/Myself.vue';
import WebsiteShine from './components/WebsiteShine.vue';
</script>

<template>
  <div class="min-h-screen bg-black text-white">
    <!-- Navbar Section -->
    <header class="bg-black p-4 fixed w-full top-0 z-50">
      <div class="container mx-auto flex justify-between items-center">
        <h1 class="text-3xl font-light">Kaspar<span class="text-gray-400">.</span></h1>
        <nav class="hidden md:flex space-x-6 text-gray-300">
          <a href="#services" class="hover:text-white transition-colors">SERVICES</a>
          <a href="#work" class="hover:text-white transition-colors">WORK</a>
          <a href="#about" class="hover:text-white transition-colors">ABOUT</a>
          <a href="#blog" class="hover:text-white transition-colors">BLOG</a>
          <a href="#contact" class="bg-gray-800 text-white px-4 py-2 rounded-lg hover:bg-gray-700 transition">LET'S TALK</a>
        </nav>
      </div>
    </header>

    <!-- Hero Section -->
    <section class="flex items-center justify-center min-h-screen bg-black" id="hero">
      <div class="text-center space-y-4">
        <h2 class="text-4xl md:text-6xl font-light">I'm Kaspar.</h2>
        <p class="text-gray-400 text-lg">Creative Developer & Designer</p>
        <button class="mt-4 bg-gray-800 px-6 py-3 rounded-lg text-white hover:bg-gray-700 transition">View My Work</button>
      </div>
    </section>

    <Services />
    <Work />
    <Clients />
    <Myself />
    <WebsiteShine />
  </div>
</template>
