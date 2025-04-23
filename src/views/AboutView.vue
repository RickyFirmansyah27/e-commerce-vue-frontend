<template>
  <v-card
    class="mx-auto my-8"
    max-width="600"
    elevation="4"
    rounded="lg"
    style="background: linear-gradient(135deg, #f5f7fa 0%, #e4e7eb 100%);"
  >
    <!-- Header with Icon and Gradient Text -->
    <v-card-title class="d-flex align-center">
      <v-icon color="orange-darken-2" size="large" class="mr-2">mdi-store</v-icon>
      <span class="text-h5 font-weight-bold" style="color: #ff6200;">
        About This Store
      </span>
    </v-card-title>

    <!-- Divider for Visual Separation -->
    <v-divider class="mx-4" />

    <!-- Card Content with Improved Typography and Spacing -->
    <v-card-text class="pa-6">
      <p class="text-body-1 mb-4" style="color: #333;">
        Welcome to our online store! We are passionate about delivering high-quality products and exceptional customer service. Explore our wide range of offerings and enjoy a seamless shopping experience tailored just for you.
      </p>
      <p class="text-subtitle-1 font-weight-medium mb-2" style="color: #555;">
        Contact Us
      </p>
      <p class="text-body-2 mb-4">
        <v-icon small class="mr-1">mdi-email</v-icon>
        <a href="mailto:support@yourstore.online" style="text-decoration: none; color: #ff6200;">
          support@yourstore.online
        </a>
      </p>

      <!-- Call-to-Action Button -->
      <v-btn
        color="orange-darken-2"
        class="white--text"
        rounded
        elevation="2"
        @click="contactUs"
      >
        Get in Touch
      </v-btn>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  methods: {
    contactUs() {
      window.location.href = 'mailto:rickyfirmansyah2707@gmail.com';
    },
  },
};
</script>