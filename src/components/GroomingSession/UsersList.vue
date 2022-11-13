<template>
  <div>Users list</div>
  <ul>
    <li v-for="user in users" :key="user.connectionID">
      {{ user.email }}
    </li>
  </ul>
</template>

<script>
export default {
  name: 'UsersList',

  props: {
    users: {
      type: Array,
      default() {
        return [];
      },
    },
  },

  methods: {},
};
</script>

<style scoped></style>
