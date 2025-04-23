<template>
  <v-container class="my-8">
    <v-row v-if="products.length > 0" justify="center">
      <v-col
        v-for="p in products"
        :key="p.id"
        cols="12"
        sm="6"
        md="4"
        lg="3"
        class="d-flex"
      >
        <product-card :product="p" />
      </v-col>
    </v-row>
    <v-row v-else justify="center">
      <v-col cols="12" class="text-center py-8">
        <v-icon color="grey-lighten-1" size="x-large" class="mb-4">mdi-store-off</v-icon>
        <p class="text-body-1 mb-4" style="color: #555;">
          No products available at the moment.
        </p>
        <v-btn
          color="orange-darken-2"
          class="white--text"
          rounded
          elevation="2"
          @click="$router.push('/')"
        >
          Refresh
        </v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import ProductCard from './ProductCard.vue';
import { useProductsStore } from '../stores/products';
import { mapState } from 'pinia';

export default {
  components: {
    ProductCard,
  },
  computed: {
    ...mapState(useProductsStore, ['products']),
  },
};
</script>

<style scoped>
.v-col {
  transition: transform 0.2s ease;
}

.v-col:hover {
  transform: translateY(-4px);
}
</style>