<template>
  <div class="min-h-screen bg-black text-white">
    <!-- Hero Section -->
    <div class="min-h-screen flex flex-col justify-center items-center text-center">
      <h1 class="text-4xl font-bold mb-4">Welcome to My Portfolio</h1>
      <p class="text-lg text-gray-400 mb-8">Creative Developer & Designer</p>
      <button
        @click="scrollToContact"
        class="mt-4 bg-gray-800 px-6 py-3 rounded-lg text-white hover:bg-gray-700 transition"
      >
        Get in Touch
      </button>
    </div>

    <!-- Contact Section -->
    <div ref="contactSection" class="min-h-screen bg-gray-900 flex items-center justify-center p-4">
      <div class="bg-gray-800 shadow-md rounded-lg p-8 max-w-md w-full border border-gray-700">
        <h2 class="text-2xl font-bold text-center mb-6">Let’s get in touch.</h2>
        <form @submit.prevent="submitForm" class="space-y-4">
          <!-- Name Input -->
          <div class="relative">
            <label for="name" class="block text-xs text-gray-500 mb-1">Name</label>
            <input
              id="name"
              type="text"
              v-model="name"
              placeholder="Your Name"
              required
              class="w-full px-4 py-3 bg-gray-700 text-gray-300 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500"
            />
          </div>

          <!-- Email Input -->
          <div class="relative">
            <label for="email" class="block text-xs text-gray-500 mb-1">Email</label>
            <input
              id="email"
              type="email"
              v-model="email"
              placeholder="Your Email"
              required
              class="w-full px-4 py-3 bg-gray-700 text-gray-300 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500"
            />
          </div>

          <!-- Message Input -->
          <div class="relative">
            <label for="message" class="block text-xs text-gray-500 mb-1">Message</label>
            <textarea
              id="message"
              v-model="message"
              placeholder="Your Message"
              required
              rows="4"
              class="w-full px-4 py-3 bg-gray-700 text-gray-300 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500"
            ></textarea>
          </div>

          <!-- Submit Button -->
          <button
            type="submit"
            class="w-full py-3 bg-gray-600 text-gray-300 uppercase tracking-widest text-sm rounded-md hover:bg-gray-500 transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: '',
      email: '',
      message: '',
    };
  },
  methods: {
    scrollToContact() {
      // Scroll to the contact section smoothly
      this.$refs.contactSection.scrollIntoView({ behavior: 'smooth' });
    },
    async submitForm() {
      try {
        // Replace with your actual API endpoint
        const response = await fetch('/api/send-email', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            name: this.name,
            email: this.email,
            message: this.message,
          }),
        });

        if (response.ok) {
          alert('Message sent successfully!');
          // Reset form
          this.name = '';
          this.email = '';
          this.message = '';
        } else {
          alert('Failed to send message. Please try again.');
        }
      } catch (error) {
        console.error('Error:', error);
        alert('An error occurred. Please try again.');
      }
    },
  },
};
</script>

<style>
html {
  scroll-behavior: smooth;
}
</style>
