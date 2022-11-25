<template>
  <v-row class="root">
    <v-col cols="12" sm="12" md="12" lg="8">
      <rooms-search @search="getRooms"></rooms-search>
      <rooms-table
        :rooms="rooms"
        :use-saved-room-item="true"
        @roomWasUnsaved="getRooms"
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
    return { rooms: [] };
  },

  methods: {
    async getRooms() {
      this.rooms = await ApiService.getAllRooms();
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
