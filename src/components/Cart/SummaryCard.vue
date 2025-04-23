<template>
  <v-card
    class="mx-auto my-8"
    max-width="400"
    elevation="4"
    rounded="lg"
    style="background: linear-gradient(135deg, #fff7e6 0%, #ffffff 100%);"
  >
    <!-- Card Header with Icon and Stylized Title -->
    <v-card-title class="d-flex align-center pa-6">
      <v-icon color="orange-darken-2" size="large" class="mr-2">mdi-receipt</v-icon>
      <span class="text-h5 font-weight-bold" style="color: #333;">
        Order Summary
      </span>
    </v-card-title>

    <v-divider class="mx-4" />

    <!-- Card Content -->
    <v-card-text class="pa-6">
      <!-- Total Amount -->
      <div class="d-flex justify-space-between align-center mb-4">
        <span class="text-subtitle-1 font-weight-medium" style="color: #555;">
          Total to Pay
        </span>
        <span class="text-h6 font-weight-bold" style="color: #ff6200;">
          $ {{ totalAmount.toFixed(2) }}
        </span>
      </div>

      <!-- Call-to-Action Button -->
      <v-btn
        color="orange-darken-2"
        class="white--text"
        block
        rounded
        elevation="2"
        size="large"
        @click="placeOrder"
      >
        Place Order
      </v-btn>
    </v-card-text>
  </v-card>
</template>

<script lang="ts">
import { useCartStore } from '@/stores/cart';
import { mapState } from 'pinia';

export default {
  computed: {
    ...mapState(useCartStore, ['totalAmount']),
  },
  methods: {
    placeOrder() {
      // Simulate placing an order (e.g., redirect to checkout or trigger API call)
      alert('Order placed successfully!'); // Replace with actual logic
    },
  },
};
</script>

<style scoped>
.v-card {
  transition: transform 0.2s ease;
}

.v-card:hover {
  transform: translateY(-4px);
}
</style>