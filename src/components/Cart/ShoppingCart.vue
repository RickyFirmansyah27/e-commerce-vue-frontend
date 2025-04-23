<template>
  <v-card
    class="mx-auto my-8"
    max-width="800"
    elevation="4"
    rounded="lg"
    style="background: #ffffff;"
  >
    <!-- Card Header with Icon and Stylized Title -->
    <v-card-title class="d-flex align-center pa-6">
      <v-icon color="orange-darken-2" size="large" class="mr-2">mdi-cart</v-icon>
      <span class="text-h5 font-weight-bold" style="color: #333;">
        Products in Your Cart
      </span>
    </v-card-title>

    <v-divider class="mx-4" />

    <!-- Card Content -->
    <v-card-text class="pa-6">
      <!-- Table for Cart Items -->
      <v-table v-if="details.length > 0" class="cart-table">
        <thead>
          <tr>
            <th class="text-left text-subtitle-1 font-weight-medium">Product</th>
            <th class="text-center text-subtitle-1 font-weight-medium">Quantity</th>
            <th class="text-right text-subtitle-1 font-weight-medium">Price</th>
            <th class="text-right text-subtitle-1 font-weight-medium">Subtotal</th>
            <th class="text-center text-subtitle-1 font-weight-medium">
              <span class="d-sr-only">Remove</span>
            </th>
          </tr>
        </thead>
        <tbody>
          <shopping-cart-item
            v-for="detail in details"
            :key="detail.product.id"
            :detail="detail"
            class="cart-item"
          />
        </tbody>
      </v-table>

      <!-- Empty Cart State -->
      <div v-else class="text-center py-8">
        <v-icon color="grey-lighten-1" size="x-large" class="mb-4">mdi-cart-off</v-icon>
        <p class="text-body-1 mb-4" style="color: #555;">
          Your shopping cart is empty.
        </p>
        <v-btn
          color="orange-darken-2"
          class="white--text"
          rounded
          elevation="2"
          :to="{ path: '/' }"
        >
          Explore Products
        </v-btn>
      </div>
    </v-card-text>
  </v-card>
</template>

<script lang="ts">
import { useCartStore } from '@/stores/cart';
import { mapState } from 'pinia';
import ShoppingCartItem from './ShoppingCartItem.vue';

export default {
  components: {
    ShoppingCartItem,
  },
  computed: {
    ...mapState(useCartStore, ['details']),
  },
};
</script>

<style scoped>
.cart-table {
  border-radius: 8px;
  overflow: hidden;
}

.cart-table th {
  background-color: #f5f5f5;
  padding: 16px;
}

.cart-item {
  transition: background-color 0.2s ease;
}

.cart-item:hover {
  background-color: #fff3e0;
}
</style>