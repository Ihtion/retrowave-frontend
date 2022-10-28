<template>
  <v-container>
    <v-row class="search-container">
      <v-col cols="12" sm="6" md="6" lg="6">
        <v-text-field
          v-model="searchText"
          prepend-icon="mdi-magnify"
          label="Search by name"
          clearable
        />
      </v-col>
    </v-row>
    <v-row v-if="foundRoom" class="found-room-container">
      <v-col cols="12" sm="6" md="6" lg="6">
        <v-card class="found-room-card">
          <v-card-text>
            <div>
              {{ foundRoom.name }}
              {{ foundRoom.description }}
            </div>
          </v-card-text>
          <v-divider class="mx-4"></v-divider>
          <v-card-actions>
            <v-btn @click="handleRoomSaving" color="blue darken-1" text>{{
              foundRoomIsSaved ? 'Unsave' : 'Save'
            }}</v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { ApiService } from '@/services';
import { useDebouncedRef } from '@/hooks';

export default {
  name: 'FindRoom',

  props: {
    savedRooms: {
      type: Array,
      default() {
        return [];
      },
    },
  },

  emits: {
    roomSaving: null,
  },

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

  computed: {
    foundRoomIsSaved() {
      return this.savedRooms.map(({ id }) => id).includes(this.foundRoom?.id);
    },
  },

  methods: {
    async findRoom(roomName) {
      if (roomName === '') {
        this.foundRoom = null;

        return;
      }

      try {
        this.foundRoom = await ApiService.getRoomByName(roomName);
      } catch (e) {
        this.foundRoom = null;
      }
    },

    async handleRoomSaving() {
      if (this.foundRoomIsSaved) {
        await ApiService.removeFromSavedRooms(this.foundRoom?.id);
      } else {
        await ApiService.addToSavedRooms(this.foundRoom?.id);
      }

      this.$emit('roomSaving');
    },
  },
};
</script>

<style scoped>
.search-container {
  margin-top: 25px;
  justify-content: center;
}
.found-room-container {
  justify-content: center;
}
.found-room-card {
  margin-left: 40px;
}
</style>
