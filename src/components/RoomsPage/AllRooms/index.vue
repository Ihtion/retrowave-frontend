<template>
  <v-row class="root">
    <v-col cols="12" sm="12" md="12" lg="8">
      <rooms-search @search="getRooms"></rooms-search>
      <rooms-table
        :rooms="rooms"
        :myRoomsIDs="myRoomsIDs"
        @roomChange="getRooms"
      ></rooms-table>
    </v-col>
  </v-row>
</template>

<script>
import { ApiService } from '@/services';

import RoomsTable from '../RoomsTable';

import RoomsSearch from './RoomsSearch';

export default {
  name: 'AllRooms',
  components: { RoomsSearch, RoomsTable },

  data() {
    return { rooms: [], myRoomsIDs: [] };
  },

  methods: {
    async getRooms() {
      const rooms = await ApiService.getAllRooms();
      const myRooms = await ApiService.getMyRooms();

      this.rooms = rooms;
      this.myRoomsIDs = myRooms.map((room) => room.id);
    },
  },

  async beforeMount() {
    await this.getRooms();
  },
};
</script>

<style scoped>
.root {
  margin-inline: 20px;
  justify-content: center;
}
</style>
