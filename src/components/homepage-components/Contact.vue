<template>
    <div class="min-h-screen bg-black flex items-center justify-center p-4">
      <div class="bg-gray-900 shadow-md rounded-lg p-8 max-w-md w-full border border-gray-700">
        <h2 class="text-2xl font-bold text-center mb-6 text-white">Contact Us</h2>
        <form @submit.prevent="submitForm" class="space-y-4">
          <!-- Name Input -->
          <div class="relative">
            <svg xmlns="http://www.w3.org/2000/svg" class="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
              <circle cx="12" cy="7" r="4"></circle>
            </svg>
            <input
              type="text"
              v-model="name"
              placeholder="Your Name"
              required
              class="w-full pl-10 pr-3 py-2 bg-gray-800 text-white border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
  
          <!-- Email Input -->
          <div class="relative">
            <svg xmlns="http://www.w3.org/2000/svg" class="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
              <polyline points="22,6 12,13 2,6"></polyline>
            </svg>
            <input
              type="email"
              v-model="email"
              placeholder="Your Email"
              required
              class="w-full pl-10 pr-3 py-2 bg-gray-800 text-white border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
  
          <!-- Message Input -->
          <div class="relative">
            <svg xmlns="http://www.w3.org/2000/svg" class="absolute left-3 top-3 text-gray-500" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
            </svg>
            <textarea
              v-model="message"
              placeholder="Your Message"
              required
              rows="4"
              class="w-full pl-10 pr-3 py-2 bg-gray-800 text-white border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            ></textarea>
          </div>
  
          <!-- Submit Button -->
          <button
            type="submit"
            class="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition duration-300 ease-in-out"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        name: '',
        email: '',
        message: ''
      }
    },
    methods: {
      async submitForm() {
        try {
          // Replace with your actual email sending endpoint
          const response = await fetch('/api/send-email', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              name: this.name,
              email: this.email,
              message: this.message
            })
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
      }
    }
  }
  </script>