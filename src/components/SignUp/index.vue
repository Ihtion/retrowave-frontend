<template>
  <v-row class="root">
    <v-col cols="12" sm="10" md="8" lg="4">
      <v-card
        class="elevation-12 card"
        prepend-icon="mdi-card-account-details"
        title="Registration on Retrowave"
      >
        <v-card-text class="card-text">
          <v-form ref="form" v-model="valid" lazy-validation>
            <v-text-field
              v-model="email"
              :rules="emailRules"
              label="E-mail"
              prepend-inner-icon="mdi-email"
              variant="outlined"
            ></v-text-field>
            <v-text-field
              type="password"
              autocomplete="on"
              v-model="password"
              :rules="passwordRules"
              label="Password"
              prepend-inner-icon="mdi-lock"
              variant="outlined"
            ></v-text-field>
            <v-text-field
              type="password"
              autocomplete="on"
              v-model="passwordConfirmation"
              :rules="passwordConfirmationRules.concat(passwordsMatchRule)"
              label="Password confirmation"
              prepend-inner-icon="mdi-lock-plus"
              variant="outlined"
            ></v-text-field>
          </v-form>
        </v-card-text>
        <v-card-actions class="card-actions">
          <v-btn block variant="outlined" rounded="pill" size="large"
            >Sign up</v-btn
          >
        </v-card-actions>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
import { defaultValues } from './defaultValues';
import { validationRules } from './validationRules';

export default {
  name: 'SignUp',
  data: () => ({
    valid: true,

    email: defaultValues.email,
    emailRules: validationRules.email,

    password: defaultValues.password,
    passwordRules: validationRules.password,

    passwordConfirmation: defaultValues.passwordConfirmation,
    passwordConfirmationRules: [validationRules.passwordConfirmation],
  }),

  computed: {
    passwordsMatchRule() {
      return () =>
        this.password === this.passwordConfirmation || 'Passwords didn’t match';
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
.card-text {
  padding-bottom: 0;
}
.card-actions {
  justify-content: center;
  padding-inline: 25px;
  padding-top: 0;
  padding-bottom: 25px;
}
</style>
