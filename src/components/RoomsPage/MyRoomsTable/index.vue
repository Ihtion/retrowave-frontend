<template>
  <v-row class="root">
    <v-col cols="12" sm="12" md="12" lg="8">
      <create-room></create-room>
      <div class="table">
        <v-table>
          <thead>
            <tr>
              <th class="text-left text-h6">Description</th>
              <th class="text-left text-h6">Key</th>
              <th class="text-center text-h6">Password</th>
              <th class="text-center text-h6">Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="room in rooms" :key="room.id">
              <room-item :room="room"></room-item>
            </tr>
          </tbody>
        </v-table>
      </div>
    </v-col>
  </v-row>
</template>

<script>
import { ApiService } from '@/services';

import CreateRoom from '../CreateRoom';

import RoomItem from './RoomItem';

export default {
  name: 'MyRoomsTable',
  components: { RoomItem, CreateRoom },
  data() {
    return {
      rooms: [],
    };
  },

  async beforeMount() {
    this.rooms = await ApiService.getRooms();
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
