<template>
  <td class="actions">
    <div class="buttons">
      <v-btn>Enter</v-btn>
      <v-btn>Unsave</v-btn>
    </div>
  </td>
</template>

<script>
export default {
  name: 'SavedRoomItemActions',

  props: {
    room: {
      type: Object,
      required: true,
    },
  },

  methods: {},
};
</script>

<style scoped>
.actions {
  width: 220px;
}
.buttons {
  display: flex;
  justify-content: space-between;
}
</style>
