<template>
  <div class="table">
    <v-table>
      <thead class="table-header">
        <tr>
          <th class="text-left text-h6">Name</th>
          <th class="text-left text-h6">Description</th>
          <th class="text-center text-h6">Password</th>
          <th class="text-center text-h6">Actions</th>
        </tr>
      </thead>
      <tbody class="table-body">
        <tr v-for="room in rooms" :key="room.id" class="table-row">
          <room-item
            :room="room"
            :myRoomsIDs="myRoomsIDs"
            @rememberRoomToggle="this.$emit('roomChange')"
            @roomDelete="this.$emit('roomChange')"
            @roomUpdate="this.$emit('roomChange')"
          >
          </room-item>
        </tr>
      </tbody>
    </v-table>
  </div>
</template>

<script>
import RoomItem from '../RoomItem';

export default {
  name: 'RoomsTable',
  components: { RoomItem },

  props: {
    rooms: {
      type: Array,
      default() {
        return [];
      },
    },
    myRoomsIDs: {
      type: Array,
      default() {
        return [];
      },
    },
  },

  emits: {
    roomChange: null,
  },
};
</script>

<style scoped>
.table {
  max-height: 50vh;
  border-radius: 15px;
  overflow-y: auto;
  overflow-x: hidden;
}
.table-header {
  background: #28002f;
}
.table-body {
  background: #10051c;
}
.table-row {
  height: 65px;
}
</style>
