<!-- CategoryOption.vue -->
<template>
  <div>
    <!-- Category Header -->
    <v-list-subheader class="text-subtitle-1 font-weight-bold d-flex align-center" style="color: #333;">
      <v-icon color="orange-darken-2" class="mr-2">mdi-filter</v-icon>
      Category
    </v-list-subheader>

    <!-- Category List -->
    <v-list-item
      link
      @click="clearCategory"
      :active="$route.name === 'home'"
      class="category-item rounded-lg"
      title="All"
    >
      <template #prepend>
        <v-icon color="orange-darken-2" size="small">mdi-shape-outline</v-icon>
      </template>
    </v-list-item>

    <v-list-item
      v-for="category in categories"
      :key="category.id"
      :title="category.name"
      link
      :active="$route.name === 'category' && Number($route.params.categoryId) === category.id"
      @click="goToCategory(category.id)"
      class="category-item rounded-lg"
    >
      <template #prepend>
        <v-icon color="orange-darken-2" size="small">mdi-tag</v-icon>
      </template>
    </v-list-item>
  </div>
</template>

<script lang="ts">
import { mapState } from 'pinia';
import { useCategoriesStore } from '@/stores/categories';

export default {
  computed: {
    ...mapState(useCategoriesStore, ['categories']),
  },
  methods: {
    clearCategory() {
      this.$router.push({ name: 'home' });
    },
    goToCategory(categoryId: number) {
      this.$router.push({
        name: 'category',
        params: { categoryId: categoryId.toString() },
      });
    },
  },
};
</script>

<style scoped>
.v-list-subheader {
  padding: 12px 16px;
  background: #f5f5f5;
  border-radius: 8px;
  margin-bottom: 8px;
}

.category-item {
  padding: 8px 16px;
  margin: 4px 0;
  transition: background-color 0.2s ease, transform 0.2s ease;
}

.category-item:hover {
  background-color: #fff3e0;
  transform: translateX(4px);
}

.category-item--active {
  background-color: #ffedd5 !important;
  color: #ff6200 !important;
}

.v-icon {
  transition: color 0.2s ease;
}

.category-item:hover .v-icon {
  color: #ff6200 !important;
}

/* Ensure titles wrap instead of truncate */
.category-item .v-list-item__title {
  white-space: normal !important; /* Allow wrapping */
  overflow: visible !important; /* Prevent truncation */
  text-overflow: clip !important; /* Disable ellipsis */
}
</style>
