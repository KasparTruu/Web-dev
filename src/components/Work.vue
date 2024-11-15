<template>
    <!-- Work Showcase Section with Animated Steps and Connecting Lines -->
    <section class="py-20 bg-gray-900" id="work">
      <div class="container mx-auto">
        <h3 class="text-3xl font-light mb-8 text-center text-gray-200">My Work</h3>
  
        <!-- Projects -->
        <div class="grid md:grid-cols-3 gap-8 mb-12">
          <div class="bg-gray-800 p-6 rounded-lg transform hover:scale-105 transition-transform">
            <img src="/src/assets/88343009.png" alt="Project 1" class="w-full rounded-md mb-4" />
            <h4 class="text-xl font-light">Project 1</h4>
          </div>
          <div class="bg-gray-800 p-6 rounded-lg transform hover:scale-105 transition-transform">
            <img src="/src/assets/88343009.png" alt="Project 2" class="w-full rounded-md mb-4" />
            <h4 class="text-xl font-light">Project 2</h4>
          </div>
          <div class="bg-gray-800 p-6 rounded-lg transform hover:scale-105 transition-transform">
            <img src="/src/assets/88343009.png" alt="Project 3" class="w-full rounded-md mb-4" />
            <h4 class="text-xl font-light">Project 3</h4>
          </div>
        </div>
  
        <!-- Work Steps Section with Connecting Lines -->
        <h3 class="text-3xl font-light mb-8 text-center text-gray-200">How I Work</h3>
  
        <div class="relative">
          <!-- Step Items -->
          <div
            v-for="(step, index) in steps"
            :key="index"
            :ref="`step-${index}`"
            :class="stepClasses(index, step.inView)"
            @mouseover="animateStep(index)"
          >
            <div class="bg-gray-800 p-6 rounded-lg transform transition-transform md:w-2/5 text-center relative z-10">
              <h4 class="text-2xl font-light mb-2">{{ step.title }}</h4>
              <p class="text-gray-400">{{ step.description }}</p>
            </div>
  
            <!-- Line Between Steps -->
            <div v-if="index < steps.length - 1" class="absolute w-px h-16 bg-gray-500 left-1/2 transform -translate-x-1/2 top-full"></div>
          </div>
        </div>
      </div>
    </section>
  </template>
  
  <script>
  export default {
    data() {
      return {
        steps: [
          { title: 'Step 1: Discovery', description: 'Understanding the project needs, goals, and target audience.', inView: false },
          { title: 'Step 2: Planning', description: 'Mapping out project timeline, resources, and key milestones.', inView: false },
          { title: 'Step 3: Design', description: 'Creating the initial designs, wireframes, and mockups for approval.', inView: false },
          { title: 'Step 4: Development', description: 'Building and coding the website or application with clean code.', inView: false },
          { title: 'Step 5: Launch & Support', description: 'Launching the project and providing ongoing support as needed.', inView: false },
        ],
      };
    },
    mounted() {
      this.initObserver();
    },
    methods: {
      initObserver() {
        const observer = new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              const index = entry.target.getAttribute('data-index');
              if (entry.isIntersecting) {
                this.steps[index].inView = true;
                observer.unobserve(entry.target); // Stop observing once in view
              }
            });
          },
          { threshold: 0.1 }
        );
  
        this.steps.forEach((_, index) => {
          const stepElement = this.$refs[`step-${index}`][0];
          stepElement.setAttribute('data-index', index);
          observer.observe(stepElement);
        });
      },
      animateStep(index) {
        this.steps[index].inView = true;
      },
      stepClasses(index, inView) {
        return [
          'flex flex-col mb-12 items-center relative',
          index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse',
          'transition-all duration-700 ease-in-out',
          { 'opacity-100 translate-x-0': inView, 'opacity-0 translate-x-8': !inView },
        ];
      },
    },
  };
  </script>
  
  <style scoped>
  .opacity-0 {
    opacity: 0;
  }
  .translate-x-8 {
    transform: translateX(2rem);
  }
  .opacity-100 {
    opacity: 1;
  }
  .translate-x-0 {
    transform: translateX(0);
  }
  </style>
  