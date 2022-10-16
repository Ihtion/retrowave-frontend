<template>
  <v-row class="search-container">
    <v-col cols="12" sm="6" md="5" lg="4">
      <v-text-field
        v-model="searchText"
        prepend-icon="mdi-magnify"
        label="Search by key"
        clearable
      />
    </v-col>
    <div v-if="foundRoom">Found Room</div>
  </v-row>
</template>

<script>
import { ApiService } from '@/services';
import { useDebouncedRef } from '@/hooks';

export default {
  name: 'FindRoom',

  setup() {
    return {
      searchText: useDebouncedRef('', 500),
    };
  },

  data: () => ({
    foundRoom: null,
  }),

  watch: {
    async searchText(newSearchText) {
      await this.findRoom(newSearchText);
    },
  },

  methods: {
    async findRoom(roomKey) {
      if (roomKey === '') {
        this.foundRoom = null;

        return;
      }

      try {
        this.foundRoom = await ApiService.getRoomByKey(roomKey);
      } catch (e) {
        this.foundRoom = null;
      }
    },
  },
};
</script>

<style scoped>
.search-container {
  margin-top: 25px;
  justify-content: center;
}
</style>
