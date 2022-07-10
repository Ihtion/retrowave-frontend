<template>
  <v-row class="root">
    <v-col cols="12" sm="10" md="8" lg="4">
      <v-card class="elevation-12 card">
        <v-card-text>
          <v-tabs v-model="tab" background-color="grey-darken-4">
            <v-tab value="signIn">
              <v-icon start> mdi-lock </v-icon>
              Login
            </v-tab>
            <v-tab value="signUp">
              <v-icon start> mdi-card-account-details </v-icon>
              Registration
            </v-tab>
          </v-tabs>

          <v-window v-model="tab" class="form">
            <v-window-item value="signIn">
              <SignIn ref="signInForm"></SignIn>
            </v-window-item>
            <v-window-item value="signUp">
              <SignUp ref="signUpForm"></SignUp>
            </v-window-item>
          </v-window>
        </v-card-text>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
import SignUp from '@/components/LoginPage/SignUp';
import SignIn from '@/components/LoginPage/SignIn';

console.log({ SignIn, SignUp });

export default {
  name: 'LoginPage',
  components: { SignUp, SignIn },

  data() {
    return {
      tab: null,
    };
  },

  methods: {
    clearForms() {
      this.$refs.signUpForm?.clearForm();
      this.$refs.signInForm?.clearForm();
    },
  },

  watch: {
    tab() {
      this.clearForms();
    },
  },
};
</script>

<style scoped>
.root {
  height: 100%;
  align-items: center;
  justify-content: center;
  background-image: url('../../assets/retro.jpeg');
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
}
.card {
  border-radius: 15px;
}
.form {
  padding-top: 40px;
  margin-inline: 20px;
  margin-bottom: 15px;
}
</style>
