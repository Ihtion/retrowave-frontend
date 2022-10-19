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
          <room-item :room="room">
            <template v-slot:actions>
              <saved-room-item-actions
                v-if="useSavedRoomItem"
                :room="room"
              ></saved-room-item-actions>
              <my-room-item-actions v-else :room="room"> </my-room-item-actions>
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
};
</script>

<style scoped>
.table {
  margin-top: 15px;
}
</style>
