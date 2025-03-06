<script setup>
import { ref, onMounted } from 'vue';

function scrollToSection(sectionId) {
  const target = document.getElementById(sectionId);
  if (target) {
    target.scrollIntoView({
      behavior: 'smooth', // Smooth scrolling
      block: 'start', // Align to the top of the section
    });
  }
}

// Reactive properties for cube rotation
const rotation = ref(0);
const innerRotation1 = ref(0);
const innerRotation2 = ref(0);

onMounted(() => {
  // Rotate the cubes continuously
  setInterval(() => {
    rotation.value += 1;
    innerRotation1.value -= 1; // Rotate inner cube 1 in the opposite direction
    innerRotation2.value += 1.5; // Rotate inner cube 2 at a different speed
  }, 16); // Approximately 60 frames per second
});
</script>

<template>
  <header class="bg-black p-4 fixed w-full top-0 z-50">
    <div class="container mx-auto flex justify-between items-center">
      <div class="flex items-center">
        <h1 class="text-3xl font-light">Kaspar<span class="text-gray-400">.</span></h1>
        <!-- 3D Cubes -->
        <div class="scene ml-4">
          <div
            class="cube"
            :style="{ transform: `rotateX(-30deg) rotateY(${rotation}deg)` }"
          >
            <div class="face front"></div>
            <div class="face back"></div>
            <div class="face left"></div>
            <div class="face right"></div>
            <div class="face top"></div>
            <div class="face bottom"></div>
            <!-- Inner Cube 1 -->
            <div
              class="inner-cube"
              :style="{ transform: `rotateX(30deg) rotateY(${innerRotation1}deg)` }"
            >
              <div class="face front"></div>
              <div class="face back"></div>
              <div class="face left"></div>
              <div class="face right"></div>
              <div class="face top"></div>
              <div class="face bottom"></div>
            </div>
            <!-- Inner Cube 2 -->
            <div
              class="inner-cube"
              :style="{ transform: `rotateX(45deg) rotateY(${innerRotation2}deg)` }"
            >
              <div class="face front"></div>
              <div class="face back"></div>
              <div class="face left"></div>
              <div class="face right"></div>
              <div class="face top"></div>
              <div class="face bottom"></div>
            </div>
          </div>
        </div>
      </div>
      <nav class="hidden md:flex space-x-6 animate-fade animate-once animate-fill-both text-gray-300">
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

<style scoped>
.scene {
  display: flex;
  justify-content: center;
  align-items: center;
  perspective: 600px;
}

.cube {
  width: 40px; /* Size for the outer cube */
  height: 40px;
  position: relative;
  transform-style: preserve-3d;
  margin: 0 5px;
}

.inner-cube {
  width: 40px; /* Same size for the inner cubes */
  height: 40px;
  position: absolute;
  top: 0; /* Center the inner cubes */
  left: 0;
  transform-style: preserve-3d;
}

.face {
  position: absolute;
  width: 100%;
  height: 100%;
  background: transparent;
  border: 1px solid white; /* White outlines */
}

/* Positioning the faces of the cube */
.front  { transform: translateZ(20px); }
.back   { transform: rotateY(180deg) translateZ(20px); }
.left   { transform: rotateY(-90deg) translateZ(20px); }
.right  { transform: rotateY(90deg) translateZ(20px); }
.top    { transform: rotateX(90deg) translateZ(20px); }
.bottom { transform: rotateX(-90deg) translateZ(20px); }
</style>