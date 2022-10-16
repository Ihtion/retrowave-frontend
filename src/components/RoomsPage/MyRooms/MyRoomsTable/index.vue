<template>
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
</template>

<script>
import { ApiService } from '@/services';

import RoomItem from './RoomItem';

export default {
  name: 'MyRoomsTable',
  components: { RoomItem },
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
.table {
  margin-top: 15px;
}
</style>
