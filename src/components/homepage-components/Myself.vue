<template>
  <section id="about" class="flex flex-col items-center justify-center min-h-screen text-center bg-black text-white">
    <h1 class="text-5xl md:text-8xl animate-fill-both animate-fade-up animate font-serif italic">Kaspar Truu</h1>
    <p class="text-lg md:text-2xl font-light animate-fade-up animate-once italic text-gray-400 mt-4">
      A website that leaves a lasting impression!
    </p>
    <p class="text-gray-500 max-w-2xl mx-auto mt-6">
      Hi, I'm Kaspar Truu studying in Kuresaare Ametikool, profession of IT Junior Software Development
    </p>
    <!-- Social Media Icons -->
    <div class="flex justify-center space-x-4 mt-6">
      <a href="https://www.instagram.com/Truu_kaspar/" class="text-gray-400 hover:text-white transition">Instagram</a>
      <a href="https://x.com/" class="text-gray-400 hover:text-white transition">Twitter</a>
      <a href="https://github.com/KasparTruu" class="text-gray-400 hover:text-white transition">Github</a>
      <a href="https://www.facebook.com/kaspar.truu.3/" class="text-gray-400 hover:text-white transition">Facebook</a>
    </div>
  </section>
  <div class="container mx-auto p-4">
    <section class="mb-8">
      <h3 class="text-2xl font-semibold mb-4">Skills</h3>
      <div>
        <div class="flex items-center mb-4">
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original-wordmark.svg" alt="HTML" class="w-8 h-8 mr-2">
          <span class="flex-1">HTML - 75%</span>
          <div class="w-full bg-gray-200 rounded-full h-2.5">
            <div class="bg-blue-600 h-2.5 rounded-full" style="width: 75%"></div>
          </div>
        </div>
        <div class="flex items-center mb-4">
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" alt="CSS" class="w-8 h-8 mr-2">
          <span class="flex-1">CSS - 50%</span>
          <div class="w-full bg-gray-200 rounded-full h-2.5">
            <div class="bg-blue-600 h-2.5 rounded-full" style="width: 50%"></div>
          </div>
        </div>
        <div class="flex items-center mb-4">
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" alt="JavaScript" class="w-8 h-8 mr-2">
          <span class="flex-1">JavaScript - 40%</span>
          <div class="w-full bg-gray-200 rounded-full h-2.5">
            <div class="bg-blue-600 h-2.5 rounded-full" style="width: 40%"></div>
          </div>
        </div>
      </div>
    </section>
    <section>
      <h3 class="text-2xl font-semibold mb-4">Core Competencies</h3>
      <ul class="list-disc list-inside">
        <li>Database Design & Development</li>
        <li>Web Development</li>
        <li>Backend Development</li>
        <li>Framework Implementation</li>
      </ul>
    </section>
  </div>
</template>

<script>
export default {
  name: 'Myself'
}
</script>

<style scoped>
.container {
  max-width: 800px;
  margin: 0 auto;
}
</style>
