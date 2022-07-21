<template>
  <v-form ref="form" v-model="valid" lazy-validation>
    <v-text-field
      v-model="email"
      :rules="validationRules.email"
      label="E-mail"
      prepend-inner-icon="mdi-email"
      variant="outlined"
    ></v-text-field>
    <v-text-field
      type="password"
      autocomplete="on"
      v-model="password"
      :rules="validationRules.password"
      label="Password"
      prepend-inner-icon="mdi-lock"
      variant="outlined"
      counter="50"
    ></v-text-field>
    <v-text-field
      type="password"
      autocomplete="on"
      v-model="passwordConfirmation"
      :rules="validationRules.passwordConfirmation.concat(passwordsMatchRule)"
      label="Password confirmation"
      prepend-inner-icon="mdi-lock-plus"
      variant="outlined"
    ></v-text-field>
  </v-form>
  <div>
    <v-btn
      block
      variant="outlined"
      rounded="pill"
      size="large"
      :disabled="!valid"
      :loading="isLoading"
      @click="submitForm"
      >Sign up</v-btn
    >
  </div>
</template>

<script>
import { useToast } from 'vue-toastification';

import { ApiService } from '@/services';
import { getApiErrorMessage } from '@/helpers';

import { validationRules } from './validationRules';

export default {
  name: 'SignUpForm',

  setup() {
    const notificationToast = useToast();

    return { notificationToast, validationRules };
  },

  data: () => ({
    valid: false,
    isLoading: false,

    email: '',
    password: '',
    passwordConfirmation: '',
  }),

  computed: {
    passwordsMatchRule() {
      return (
        this.password === this.passwordConfirmation || 'Passwords didn’t match'
      );
    },
  },

  emits: {
    successSignUp: null,
  },

  methods: {
    async submitForm() {
      this.isLoading = true;

      try {
        await ApiService.signUp({
          email: this.email.trim(),
          password: this.password,
        });

        this.notificationToast.success(
          'Your account has been successfully created'
        );

        this.$emit('successSignUp');
      } catch (error) {
        const errorMessage = getApiErrorMessage(error);

        if (errorMessage !== null) {
          this.notificationToast.error(errorMessage);
        }
      } finally {
        this.isLoading = false;
      }
    },

    clearForm() {
      this.$refs.form.reset();
    },
  },
};
</script>
