<template>
  <v-sheet
    class="left-menu"
    max-width="300"
    width="100%"
    elevation="4"
    rounded="lg"
    style="background: #ffffff;"
  >
    <v-list rounded="lg" class="pa-4">
      <!-- Category Options Section -->
      <category-option />

      <!-- Divider -->
      <v-divider class="my-4" />

      <!-- Order Options Section -->
      <order-options />
    </v-list>
  </v-sheet>
</template>


<script lang="ts">
import OrderOptions from './OrderOptions.vue';
import CategoryOption from './CategoryOption.vue';

export default {
  components: {
    OrderOptions,
    CategoryOption,
  },
};
</script>

<style scoped>
.v-sheet {
  transition: box-shadow 0.2s ease;
}

.v-sheet:hover {
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
}

.v-list-subheader {
  padding-left: 12px;
  margin-bottom: 8px;
}

.v-divider {
  border-color: #e0e0e0;
}
</style>