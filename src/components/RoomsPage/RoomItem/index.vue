<template>
  <td class="item-cell">{{ room.name }}</td>
  <td class="item-cell">{{ room.description }}</td>
  <td class="password">
    <v-icon v-if="!room.password" icon="mdi-lock-open-outline"></v-icon>
    <v-icon v-else icon="mdi-lock-outline"></v-icon>
  </td>
  <slot name="actions"></slot>
</template>

<script>
export default {
  name: 'RoomItem',

  props: {
    room: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style scoped>
.item-cell {
  font-size: 17px !important;
  font-weight: 500 !important;
}
.password {
  text-align: center;
}
</style>
