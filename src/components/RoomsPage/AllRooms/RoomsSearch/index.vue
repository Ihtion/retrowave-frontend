<template>
  <v-container>
    <v-row class="container">
      <v-col cols="12" sm="6" md="6" lg="6">
        <v-text-field
          v-model="searchText"
          prepend-icon="mdi-magnify"
          label="Search by name"
          clearable
        />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { useDebouncedRef } from '@/hooks';

export default {
  name: 'RoomsSearch',

  emits: {
    search: String,
  },

  setup() {
    return {
      searchText: useDebouncedRef('', 500),
    };
  },

  watch: {
    async searchText() {
      this.$emit('search', this.searchText);
    },
  },
};
</script>

<style scoped>
.container {
  margin-top: 25px;
}
</style>
