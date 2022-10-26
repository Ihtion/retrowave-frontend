<template>
  <div class="table">
    <v-table>
      <thead class="table-header">
        <tr>
          <th class="text-left text-h6">Description</th>
          <th class="text-left text-h6">Key</th>
          <th class="text-center text-h6">Password</th>
          <th class="text-center text-h6">Actions</th>
        </tr>
      </thead>
      <tbody class="table-body">
        <tr v-for="room in rooms" :key="room.id" class="table-row">
          <room-item :room="room">
            <template v-slot:actions>
              <saved-room-item-actions
                v-if="useSavedRoomItem"
                :room="room"
              ></saved-room-item-actions>
              <my-room-item-actions
                v-else
                :room="room"
                @roomWasDeleted="handleRoomDeleting"
              >
              </my-room-item-actions>
            </template>
          </room-item>
        </tr>
      </tbody>
    </v-table>
  </div>
</template>

<script>
import RoomItem from '../RoomItem';
import MyRoomItemActions from '../RoomItem/MyRoomItemActions';
import SavedRoomItemActions from '../RoomItem/SavedRoomItemActions';

export default {
  name: 'RoomsTable',
  components: { SavedRoomItemActions, MyRoomItemActions, RoomItem },

  props: {
    rooms: {
      type: Array,
      default() {
        return [];
      },
    },
    useSavedRoomItem: {
      type: Boolean,
      default() {
        return false;
      },
    },
  },

  emits: {
    roomWasDeleted: null,
  },

  methods: {
    handleRoomDeleting() {
      this.$emit('roomWasDeleted');
    },
  },
};
</script>

<style scoped>
.table {
  border-radius: 20px;
  margin-top: 15px;
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
