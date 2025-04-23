<template>
  <tr class="cart-item">
    <!-- Product Image and Name -->
    <td class="py-4">
      <div class="d-flex align-center">
        <v-avatar size="48" class="mr-3" rounded="md">
          <v-img :src="productImageUrl" alt="Product image" cover />
        </v-avatar>
        <span class="text-body-1 font-weight-medium" style="color: #333;">
          {{ detail.product.name }}
        </span>
      </div>
    </td>

    <!-- Quantity Controls -->
    <td class="text-center py-4">
      <div class="d-flex align-center justify-center">
        <v-btn
          icon="mdi-minus"
          size="small"
          color="orange-darken-2"
          variant="text"
          @click="decrementQuantity(detail.product.id)"
          :disabled="detail.quantity <= 1"
        />
        <span class="text-body-1 mx-2" style="min-width: 24px; text-align: center;">
          {{ detail.quantity }}
        </span>
        <v-btn
          icon="mdi-plus"
          size="small"
          color="orange-darken-2"
          variant="text"
          @click="incrementQuantity(detail.product.id)"
        />
      </div>
    </td>

    <!-- Price -->
    <td class="text-right py-4">
      <span class="text-body-1" style="color: #555;">
        $ {{ detail.product.price.toFixed(2) }}
      </span>
    </td>

    <!-- Subtotal -->
    <td class="text-right py-4">
      <span class="text-body-1 font-weight-medium" style="color: #ff6200;">
        $ {{ subTotal.toFixed(2) }}
      </span>
    </td>

    <!-- Remove Button -->
    <td class="py-4">
      <v-btn
        icon="mdi-delete"
        size="small"
        color="red-darken-2"
        variant="text"
        @click="deleteProduct(detail.product.id)"
      >
      </v-btn>
    </td>
  </tr>
</template>

<script lang="ts">
import type { CartDetail } from '@/model/types';
import { useCartStore } from '@/stores/cart';
import { mapActions } from 'pinia';
import type { PropType } from 'vue';

export default {
  props: {
    detail: {
      type: Object as PropType<CartDetail>,
      required: true,
    },
  },
  methods: {
    ...mapActions(useCartStore, {
      decrementQuantity: 'decrement',
      incrementQuantity: 'increment',
      deleteProduct: 'deleteProduct',
    }),
  },
  computed: {
    productImageUrl() {
      return (
        this.detail.product.image ??
        'https://images.ecestaticos.com/qT3qXnjQDbmACTey4MBI4Q4NUU4=/31x106:1859x1477/1200x900/filters:fill(white):format(jpg)/f.elconfidencial.com%2Foriginal%2Ffe8%2F436%2Fb96%2Ffe8436b9686c43e0fb4278c7871f0ec7.jpg'
      );
    },
    subTotal() {
      return this.detail.product.price * this.detail.quantity;
    },
  },
};
</script>

<style scoped>
.cart-item {
  transition: background-color 0.2s ease;
}

.cart-item:hover {
  background-color: #fff3e0;
}

.v-avatar {
  border: 1px solid #e0e0e0;
}

.v-btn {
  transition: transform 0.2s ease;
}

.v-btn:hover {
  transform: scale(1.1);
}
</style>