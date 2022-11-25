<template>
  <td @click="openGroomingSession" class="item-cell">{{ room.name }}</td>
  <td @click="openGroomingSession" class="item-cell">{{ room.description }}</td>
  <td @click="openGroomingSession" class="password">
    <v-icon v-if="!room.password" icon="mdi-lock-open-outline"></v-icon>
    <v-icon v-else icon="mdi-lock-outline"></v-icon>
  </td>
  <own-room-actions
    v-if="isOwnRoom"
    :room="room"
    @roomDelete="this.$emit('roomDelete')"
    @roomUpdate="this.$emit('roomUpdate')"
  />
  <room-actions
    v-else
    :room="room"
    :isMyRoom="isMyRoom"
    @rememberRoomToggle="this.$emit('rememberRoomToggle')"
  />
</template>

<script>
import { PATHS } from '@/router/paths';

import RoomActions from './RoomActions';
import OwnRoomActions from './OwnRoomActions';

export default {
  name: 'RoomItem',
  components: { OwnRoomActions, RoomActions },

  setup() {
    return { PATHS };
  },

  props: {
    room: {
      type: Object,
      required: true,
    },
    myRoomsIDs: {
      type: Array,
      default() {
        return [];
      },
    },
  },

  emits: {
    roomUpdate: null,
    roomDelete: null,
    rememberRoomToggle: null,
  },

  methods: {
    openGroomingSession() {
      this.$router.push({
        name: 'Session',
        params: { roomID: this.room.id },
      });
    },
  },

  computed: {
    userID() {
      return this.$store.getters.userID;
    },
    isOwnRoom() {
      return this.room.userID === this.userID;
    },
    isMyRoom() {
      return this.myRoomsIDs.includes(this.room.id);
    },
  },
};
</script>

<style scoped>
.item-cell {
  cursor: pointer;
  font-size: 17px !important;
  font-weight: 500 !important;
}
.password {
  cursor: pointer;
  text-align: center;
}
</style>
