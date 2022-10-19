<template>
  <find-room :saved-rooms="rooms" @room-saving="getSavedRooms"></find-room>
  <v-row class="root">
    <v-col cols="12" sm="12" md="12" lg="8">
      <rooms-table :rooms="rooms" :use-saved-room-item="true"></rooms-table>
    </v-col>
  </v-row>
</template>

<script>
import { ApiService } from '@/services';

import RoomsTable from '../RoomsTable';

import FindRoom from './FindRoom';

export default {
  name: 'AllRooms',
  components: { FindRoom, RoomsTable },

  data() {
    return { rooms: [] };
  },

  methods: {
    async getSavedRooms() {
      this.rooms = await ApiService.getSavedRooms();
    },
  },

  async beforeMount() {
    await this.getSavedRooms();
  },
};
</script>

<style scoped>
.root {
  margin-inline: 20px;
  justify-content: center;
}
</style>
