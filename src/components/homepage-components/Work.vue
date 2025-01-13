<template>
  <section class="py-20 bg-gray-900" id="work">
    <div class="container mx-auto">
      <h3 class="text-3xl font-light mb-8 text-center text-gray-200">My Work</h3>
      <div class="grid sm:grid-cols-2 md:grid-cols-3 gap-6 mb-8">
        <div
          v-for="(project, index) in visibleProjects"
          :key="project.id"
          class="bg-gray-800 p-4 rounded-lg transform hover:scale-105 transition-transform"
        >
          <img
            :src="project.image"
            :alt="project.name"
            class="w-full h-40 object-cover rounded-md mb-3"
          />
          <h4 class="text-lg font-light mb-2 text-gray-200">{{ project.name }}</h4>
          <p
            class="text-sm text-gray-400 mb-3"
            v-html="project.description || 'No description available.'"
          ></p>
          <a
            :href="project.html_url"
            target="_blank"
            rel="noopener noreferrer"
            class="inline-block px-3 py-1 bg-blue-500 text-white font-medium text-sm rounded-lg hover:bg-blue-600 transition-colors"
          >
            View Project
          </a>
        </div>
      </div>
      <div class="text-center">
        <button
          v-if="!showAll"
          @click="showAll = true"
          class="px-4 py-2 bg-gray-700 text-white font-medium rounded-lg hover:bg-gray-600 transition-colors"
        >
          Show More
        </button>
        <button
          v-if="showAll"
          @click="showAll = false"
          class="px-4 py-2 bg-red-500 text-white font-medium rounded-lg hover:bg-red-600 transition-colors"
        >
          Hide
        </button>
      </div>
    </div>
  </section>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      projects: [],
      showAll: false,
    };
  },
  computed: {
    visibleProjects() {
      // Show the first 3 projects if `showAll` is false
      return this.showAll ? this.projects : this.projects.slice(0, 3);
    },
  },
  created() {
    this.fetchGitHubProjects();
  },
  methods: {
    async fetchGitHubProjects() {
      try {
        const response = await axios.get(
          "https://api.github.com/users/KasparTruu/repos"
        );

        const projects = response.data.map((repo) => ({
          id: repo.id,
          name: repo.name,
          html_url: repo.html_url,
          image: `https://picsum.photos/seed/${repo.id}/200/300`, // Unique Picsum image per project
        }));

        // Fetch README.md content for each project
        const projectsWithDescriptions = await Promise.all(
          projects.map(async (project) => {
            try {
              const readmeResponse = await axios.get(
                `https://api.github.com/repos/KasparTruu/${project.name}/readme`,
                {
                  headers: { Accept: "application/vnd.github.v3.raw" }, // Fetch raw README content
                }
              );
              project.description = readmeResponse.data;
            } catch (error) {
              console.error(
                `Error fetching README for ${project.name}:`,
                error
              );
              project.description = "No description available.";
            }
            return project;
          })
        );

        this.projects = projectsWithDescriptions;
      } catch (error) {
        console.error("Error fetching GitHub repositories:", error);
      }
    },
  },
};
</script>

<style scoped>
.container {
  max-width: 1200px;
}
</style>
