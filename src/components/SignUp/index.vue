<template>
  <v-row class="fill-height align-center root" justify="center">
    <v-col cols="12" sm="10" md="8" lg="4">
      <v-card class="elevation-12">
        <v-toolbar>
          <v-toolbar-title>Sign-up on Retrowave</v-toolbar-title>
        </v-toolbar>
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
              v-model="password"
              :rules="passwordRules"
              label="Password"
              prepend-inner-icon="mdi-lock"
              variant="outlined"
            ></v-text-field>
            <v-text-field
              v-model="passwordConfirmation"
              :rules="passwordConfirmationRules"
              label="Password confirmation"
              prepend-inner-icon="mdi-lock-plus"
              variant="outlined"
            ></v-text-field>
          </v-form>
        </v-card-text>
        <v-card-actions class="card-actions">
          <v-btn block="true" variant="outlined" rounded="pill" size="large"
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
  name: 'SignIn',
  data: () => ({
    valid: true,

    email: defaultValues.email,
    emailRules: validationRules.email,

    password: defaultValues.password,
    passwordRules: validationRules.password,

    passwordConfirmation: defaultValues.passwordConfirmation,
    passwordConfirmationRules: validationRules.passwordConfirmation,
  }),
};
</script>

<style scoped>
.root {
  background-image: url('../../assets/retro.jpeg');
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
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
