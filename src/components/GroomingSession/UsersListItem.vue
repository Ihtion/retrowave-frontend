<template>
  <v-list-item :title="userEmail">
    <template v-slot:prepend>
      <v-list-item-action start>
        <v-icon
          v-if="
            votingState === 'init' ||
            (votingState === 'finished' && estimation === null)
          "
          icon="mdi-circle-small"
          color="black"
        ></v-icon>
        <v-icon
          v-else-if="votingState === 'active' && estimation !== null"
          icon="mdi-check"
          color="green"
        ></v-icon>
        <v-icon
          v-else-if="votingState === 'active' && estimation === null"
          icon="mdi-dots-horizontal"
          color="yellow"
        ></v-icon>
        <v-chip v-else color="green" variant="outlined">{{
          estimation
        }}</v-chip>
      </v-list-item-action>
    </template>
  </v-list-item>
</template>

<script>
export default {
  name: 'UsersListItem',

  props: {
    userEmail: {
      type: String,
    },
    estimation: {
      type: Number,
    },
    votingState: {
      type: String,
    },
  },
};
</script>

<style scoped></style>
