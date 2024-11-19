<script setup lang="ts">
import Clients from './components/homepage-components/Clients.vue';
import Services from './components/homepage-components/Services.vue';
import Work from './components/homepage-components/Work.vue';
import Myself from './components/homepage-components/Myself.vue';
import WebsiteShine from './components/homepage-components/WebsiteShine.vue';
import Nav from './components/Nav.vue';
</script>

<template>
  <div class="min-h-screen bg-black text-white">
    <!-- Navbar Section -->
    <Nav></Nav>

    <!-- Hero Section with Video Background -->
    <div class="relative min-h-screen" id="hero">
      <!-- Video Background -->
      <video autoplay muted loop class="absolute top-0 left-0 w-full h-full object-cover z-0">
        <source src="/src/assets/5409425_Coll_wavebreak_Mesh_1920x1080.mov" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <!-- Content with Blurred Box -->
      <div class="relative z-10 flex flex-col items-center justify-center min-h-screen text-center">
        <div class=" bg-opacity-30 backdrop-blur-lg p-6 rounded-lg shadow-lg text-white max-w-lg">
          <h1 class="text-4xl font-bold mb-4">I'm Kaspar</h1>
          <p class="text-lg text-gray-300">Creative Developer & Designer</p>
          <button class="mt-4 bg-gray-800 px-6 py-3 rounded-lg text-white hover:bg-gray-700 transition">
            View My Work
          </button>
        </div>
      </div>
    </div>

    <!-- Main Sections -->
    <Services id="services" />
    <Work id="work" />
    <Clients />
    <Myself id="about" />
    <WebsiteShine />
  </div>
</template>

<style>
/* Ensure the video fills the viewport */
video {
  position: fixed;
  top: 0;
  left: 0;
  min-width: 100%;
  min-height: 100%;
  z-index: -1;
}
</style>
