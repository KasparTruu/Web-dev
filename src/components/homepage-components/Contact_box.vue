<template>
  <div class="bg-black text-white">
    <!-- Hero Section -->
    <div class="min-h-40 flex-col items-center text-center">
      <button
        @click="showContactForm = true; scrollToContact()"
        class="mt-4 bg-gray-800 px-6 py-3 rounded-lg text-white hover:bg-gray-700 transition"
      >
        Get in Touch
      </button>
    </div>

    <!-- Contact Section -->
    <transition name="fade">
      <div
        v-if="showContactForm"
        ref="contactSection"
        class="min-h-screen bg-gray-900 flex items-center justify-center p-4"
      >
        <div class="bg-gray-800 shadow-md rounded-lg p-8 max-w-md w-full border border-gray-700">
          <h2 class="text-2xl font-bold text-center mb-6">Let's get in touch.</h2>
          <form @submit.prevent="submitForm" class="space-y-4">
            <!-- Name Input -->
            <div class="relative">
              <label for="name" class="block text-xs text-gray-500 mb-1">Name</label>
              <input
                id="name"
                type="text"
                v-model="formData.name"
                name="name"
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
                v-model="formData.email"
                name="email"
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
                v-model="formData.message"
                name="message"
                placeholder="Your Message"
                required
                rows="4"
                class="w-full px-4 py-3 bg-gray-700 text-gray-300 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500"
              ></textarea>
            </div>

            <!-- Submit Button -->
            <button
              type="submit"
              :disabled="isSubmitting"
              class="w-full py-3 bg-gray-600 text-gray-300 uppercase tracking-widest text-sm rounded-md hover:bg-gray-500 transition disabled:opacity-50"
            >
              {{ isSubmitting ? 'Sending...' : 'Send Message' }}
            </button>
          </form>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showContactForm: false,
      isSubmitting: false,
      formData: {
        name: '',
        email: '',
        message: ''
      }
    };
  },
  methods: {
    scrollToContact() {
      this.$nextTick(() => {
        const contactSection = this.$refs.contactSection;
        if (contactSection) {
          contactSection.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
          });
        }
      });
    },
    async submitForm() {
      this.isSubmitting = true;
      try {
        const response = await fetch('https://formspree.io/f/xqakllld', {
          method: 'POST',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(this.formData)
        });

        if (response.ok) {
          alert('Message sent successfully!');
          // Reset form
          this.formData = {
            name: '',
            email: '',
            message: ''
          };
          this.showContactForm = false;
        } else {
          const data = await response.json();
          throw new Error(data.error || 'Failed to send message');
        }
      } catch (error) {
        console.error('Error:', error);
        alert(error.message || 'Failed to send message. Please try again.');
      } finally {
        this.isSubmitting = false;
      }
    },
  },
};
</script>