<template>
  <v-card
    class="product-card mx-auto"
    elevation="4"
    rounded="lg"
    style="background: #ffffff;"
    max-width="300"
  >
    <!-- Product Image -->
    <v-img
      height="200"
      :src="productImageUrl"
      cover
      class="product-image"
      alt="Product image"
    >
      <v-chip
        class="ma-2"
        color="orange-darken-2"
        text-color="white"
        size="small"
        style="position: absolute; top: 0; right: 0;"
      >
        $ {{ product.price.toFixed(2) }}
      </v-chip>
    </v-img>

    <!-- Card Content -->
    <v-card-title class="pt-4">
      <span class="text-h6 font-weight-medium text-truncate" style="color: #333;">
        {{ product.name }}
      </span>
    </v-card-title>

    <v-card-text>
      <p class="text-body-2 mb-4" style="color: #555; height: 60px; overflow: hidden;">
        {{ product.description || 'Explore this amazing product, crafted with quality and care.' }}
      </p>
    </v-card-text>

    <!-- Card Actions -->
    <v-card-actions class="pa-4">
      <v-btn
        color="orange-darken-2"
        class="white--text"
        block
        rounded
        elevation="2"
        @click="onAddButtonClick"
      >
        <v-icon left>mdi-cart-plus</v-icon>
        Add to Cart
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script lang="ts">
import type { PropType } from 'vue';
import type { Product } from '../model/types';
import { useCartStore } from '@/stores/cart';

export default {
  props: {
    product: {
      type: Object as PropType<Product>,
      required: true,
    },
  },
  methods: {
    onAddButtonClick() {
      const cartStore = useCartStore();
      cartStore.addProduct(this.product);
    },
  },
  computed: {
    productImageUrl() {
      return (
        this.product.image ??
        'https://images.ecestaticos.com/qT3qXnjQDbmACTey4MBI4Q4NUU4=/31x106:1859x1477/1200x900/filters:fill(white):format(jpg)/f.elconfidencial.com%2Foriginal%2Ffe8%2F436%2Fb96%2Ffe8436b9686c43e0fb4278c7871f0ec7.jpg'
      );
    },
  },
};
</script>

<style scoped>
.product-card {
  transition: transform 0.2s ease, box-shadow 0.2s ease;
  height: 100%;
  display: flex;
  flex-direction: column;
}

.product-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
}

.product-image {
  transition: opacity 0.2s ease;
}

.product-image:hover {
  opacity: 0.9;
}

.v-btn {
  transition: transform 0.2s ease;
}

.v-btn:hover {
  transform: scale(1.05);
}
</style>