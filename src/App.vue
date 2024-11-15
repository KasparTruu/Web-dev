<script setup lang="ts">
import Clients from './components/Clients.vue';
import Services from './components/Services.vue';
import Work from './components/Work.vue';
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
    

    <!-- Footer Section -->
    <footer class="bg-black rounded-lg m-8 py-6">
      <div class="container mx-auto flex justify-between items-center px-4">
        <!-- Left Logo Section -->
        <div class="text-white font-light text-2xl">
          Kaspar<span class="text-gray-400">.</span>
        </div>

        <!-- Center Navigation Links -->
        <nav class="hidden md:flex space-x-8 text-gray-300 text-sm">
          <a href="#" class="hover:text-white">SERVICES</a>
          <a href="#" class="hover:text-white">WORK</a>
          <a href="#" class="hover:text-white">ABOUT</a>
          <a href="#" class="hover:text-white">BLOG</a>
          <div class="relative group">
            <button class="hover:text-white flex items-center space-x-1">
              <span>PAGES</span>
              <svg class="w-4 h-4 text-gray-400 group-hover:text-white" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7"></path>
              </svg>
            </button>
            <!-- Dropdown Menu -->
            <div class="absolute hidden group-hover:block bg-gray-800 text-white mt-2 py-2 rounded shadow-lg">
              <a href="#" class="block px-4 py-2 hover:bg-gray-700">Github</a>
              <a href="#" class="block px-4 py-2 hover:bg-gray-700">Instagram</a>
            </div>
          </div>
        </nav>

        <!-- Right Button Section -->
        <div>
          <button class="bg-gray-800 text-white text-sm py-2 px-6 rounded-lg hover:bg-gray-700">
            LET'S TALK
          </button>
        </div>
      </div>
    </footer>
  </div>
</template>
