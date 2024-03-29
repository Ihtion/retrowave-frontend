<template>
  <v-row justify="center">
    <v-card class="elevation-12 card">
      <v-card-title class="card-title">
        <span class="text-h6">{{ titleText }}</span>
      </v-card-title>
      <v-card-text class="card-text">
        <v-form ref="form" v-model="valid" lazy-validation>
          <v-text-field
            v-model="name"
            :rules="validationRules.name"
            label="Name"
            prepend-inner-icon="mdi-card-text"
            variant="outlined"
            class="name-field"
          ></v-text-field>
          <v-text-field
            v-model="description"
            :rules="validationRules.description"
            label="Description"
            prepend-inner-icon="mdi-note-text"
            variant="outlined"
          ></v-text-field>
          <v-text-field
            v-model="password"
            :rules="validationRules.password"
            label="Password"
            prepend-inner-icon="mdi-lock"
            variant="outlined"
            counter="50"
            class="password-field"
            name="password"
            :type="showPassword ? 'text' : 'password'"
          >
            <template v-slot:append-inner>
              <div
                class="show-password-icon"
                @click.stop="showPassword = !showPassword"
              >
                <v-icon v-if="showPassword"> mdi-eye-off </v-icon>
                <v-icon v-else> mdi-eye </v-icon>
              </div>
            </template>
          </v-text-field>
        </v-form>
      </v-card-text>
      <v-card-actions class="actions">
        <v-btn color="blue" text @click="$emit('cancel')"> Cancel </v-btn>
        <v-spacer></v-spacer>
        <v-btn
          :disabled="!valid || !isDirty"
          @click="submitForm"
          :color="valid ? 'blue' : 'grey'"
          text
        >
          Save
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-row>
</template>

<script>
import { validationRules } from './validationRules';

export default {
  name: 'RoomForm',

  setup() {
    return { validationRules };
  },

  props: {
    titleText: {
      type: String,
      default: '',
    },
    initialName: {
      type: String,
      default: '',
    },
    initialDescription: {
      type: String,
      default: '',
    },
    initialPassword: {
      type: String,
      default: '',
    },
  },

  emits: {
    submit: {
      type: Object,
    },
    cancel: null,
  },

  data() {
    return {
      valid: false,
      isDirty: false,

      name: this.initialName,
      description: this.initialDescription,
      password: this.initialPassword,

      showPassword: false,
    };
  },

  watch: {
    name() {
      this.isDirty = true;
    },
    description() {
      this.isDirty = true;
    },
    password() {
      this.isDirty = true;
    },
  },

  methods: {
    submitForm() {
      this.$emit('submit', {
        name: this.name,
        description: this.description,
        password: this.password,
      });
    },
  },

  mounted() {
    const passwordField = this.$refs.form.items?.find(
      ({ id }) => id === 'password'
    );

    passwordField?.validate();

    if (this.initialName !== '') {
      this.$refs.form.validate();
    }
  },
};
</script>

<style scoped>
.card {
  width: 500px;
  border-radius: 15px !important;
}
.actions {
  margin-top: 0;
  padding-top: 0;
  padding-bottom: 15px;
}
.card-title {
  margin-top: 15px;
  margin-inline: 12px;
}
.card-text {
  padding-top: 15px;
  padding-inline: 25px;
}
.name-field {
  margin-bottom: 15px;
}
.password-field {
  margin-top: 15px;
}
.show-password-icon {
  cursor: pointer;
  opacity: 0.5;
}
.show-password-icon:hover {
  opacity: 1;
}
</style>
