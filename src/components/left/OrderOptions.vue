<script lang="ts">
import { useProductsStore } from '@/stores/products';
import { mapActions, mapState } from 'pinia';
    export default {
        methods: {
            ...mapActions(useProductsStore, [
                'orderByName', 'orderByNameDesc',
                'orderByPrice', 'orderByPriceDesc'
            ])
        },
        computed: {
            ...mapState(useProductsStore, ['order'])
        }
    }
</script>

<template>
    <v-list-subheader>
        Sort by
    </v-list-subheader>

    <v-list-item
        title="Lowest price"
        link
        @click="orderByPrice"
        :active="order === 'price'">
    </v-list-item>
    <v-list-item
        title="Highest price"
        link
        @click="orderByPriceDesc"
        :active="order === 'priceDesc'">
    </v-list-item>

    <v-list-item
        title="Name (A-Z)"
        link
        @click="orderByName"
        :active="order === 'name'">
    </v-list-item>
    <v-list-item
        title="Name (Z-A)"
        link
        @click="orderByNameDesc"
        :active="order === 'nameDesc'">
    </v-list-item>
</template>
