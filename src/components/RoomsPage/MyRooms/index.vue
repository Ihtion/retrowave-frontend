<template>
  <v-row class="root">
    <v-col cols="12" sm="12" md="12" lg="8">
      <create-room @roomWasCreated="getRooms"></create-room>
      <rooms-table
        :rooms="rooms"
        @roomWasUpdated="getRooms"
        @roomWasDeleted="getRooms"
        class="table"
      ></rooms-table>
    </v-col>
  </v-row>
</template>

<script>
import { ApiService } from '@/services';

import CreateRoom from '../CreateRoom';
import RoomsTable from '../RoomsTable';

export default {
  name: 'MyRooms',
  components: { RoomsTable, CreateRoom },

  data() {
    return { rooms: [] };
  },

  methods: {
    async getRooms() {
      this.rooms = await ApiService.getMyRooms();
    },
  },

  async beforeMount() {
    await this.getRooms();
  },
};
</script>

<style scoped>
.root {
  margin-top: 50px;
  margin-inline: 20px;
  justify-content: center;
}
.table {
  margin-top: 15px;
}
</style>
