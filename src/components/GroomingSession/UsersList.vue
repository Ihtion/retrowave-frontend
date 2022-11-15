<template>
  <v-card>
    <v-list>
      <v-list-subheader inset>Users</v-list-subheader>
      <v-list-item
        v-for="user in users"
        :key="user.connectionID"
        :title="user.email"
        prepend-icon="mdi-home"
      >
      </v-list-item>
    </v-list>
  </v-card>
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
