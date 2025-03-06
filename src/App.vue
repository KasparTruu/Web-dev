<script setup lang="ts">
import Clients from './components/homepage-components/Clients.vue';
import Services from './components/homepage-components/Services.vue';
import Work from './components/homepage-components/Work.vue';
import Myself from './components/homepage-components/Myself.vue';
import WebsiteShine from './components/homepage-components/WebsiteShine.vue';
import Nav from './components/Nav.vue';
import Contact_box from './components/homepage-components/Contact_box.vue';
import { ref, onMounted, onBeforeUnmount } from 'vue';

const navigateToGitHub = () => {
  window.open('https://github.com/KasparTruu?tab=repositories', '_blank');
};

const cubes = ref([]);

function createCube(x, y) {
  const cube = {
    id: Date.now(),
    x,
    y,
    rotation: Math.random() * 360,
  };
  cubes.value.push(cube);

  // Remove the cube after a certain time
  setTimeout(() => {
    cubes.value = cubes.value.filter(c => c.id !== cube.id);
  }, 3000); // Adjust the duration as needed
}

function handleMouseMove(event) {
  createCube(event.clientX, event.clientY);
}

onMounted(() => {
  window.addEventListener('mousemove', handleMouseMove);
});

onBeforeUnmount(() => {
  window.removeEventListener('mousemove', handleMouseMove);
});
</script>

<template>
  <div class="min-h-screen bg-black text-white relative overflow-hidden">
    <!-- Navbar Section -->
    <Nav></Nav>

    <!-- Hero Section with Video Background -->
    <div class="relative min-h-screen" id="hero">
      <!-- Video Background -->

      <!-- Content with Blurred Box -->
      <div class="relative z-10 flex flex-col items-center justify-center min-h-screen text-center">
        <div class="bg-opacity-30 backdrop-blur-lg p-6 rounded-lg shadow-lg text-white max-w-lg">
          <h1 class="text-4xl animate-fade-up animate-once animate-duration-1000 font-bold mb-4">I'm Kaspar</h1>
          <p class=" animate-fade-up animate-once animate-duration-1000  text-gray-300">Creative Developer & Designer</p>
          <button 
            @click="navigateToGitHub"
            class="mt-4 bg-gray-800 px-6 py-3 rounded-lg text-white hover:bg-gray-700 transition"
          >
            View My Work
          </button>
        </div>
      </div>
    </div>

    <!-- 3D Cubes -->
    <div class="absolute inset-0 pointer-events-none">
      <div
        v-for="cube in cubes"
        :key="cube.id"
        class="cube"
        :style="{
          left: `${cube.x}px`,
          top: `${cube.y}px`,
          transform: `translate(-50%, -50%) rotateX(45deg) rotateY(${cube.rotation}deg)`,
        }"
      >
        <div class="face front"></div>
        <div class="face back"></div>
        <div class="face left"></div>
        <div class="face right"></div>
        <div class="face top"></div>
        <div class="face bottom"></div>
      </div>
    </div>

    <!-- Other Sections -->
    <Clients />
    <Services />
    <Work />
    <Myself />
    <WebsiteShine />
    <Contact_box />
  </div>
</template>

<style scoped>
.cube {
  position: absolute;
  width: 40px;
  height: 40px;
  transform-style: preserve-3d;
  transition: transform 0.5s ease;
}

.face {
  position: absolute;
  width: 100%;
  height: 100%;
  background: transparent;
  border: 1px solid white;
}

.front  { transform: translateZ(20px); }
.back   { transform: rotateY(180deg) translateZ(20px); }
.left   { transform: rotateY(-90deg) translateZ(20px); }
.right  { transform: rotateY(90deg) translateZ(20px); }
.top    { transform: rotateX(90deg) translateZ(20px); }
.bottom { transform: rotateX(-90deg) translateZ(20px); }
</style>