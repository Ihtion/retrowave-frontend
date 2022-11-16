<template>
  <v-item-group selected-class="bg-primary" v-model="selection">
    <v-container>
      <v-row>
        <v-col v-for="n in possibleEstimations" :key="n" cols="12" md="3">
          <v-item v-slot="{ selectedClass, toggle }">
            <v-card
              :disabled="state !== 'active'"
              :class="['d-flex align-center', selectedClass]"
              dark
              height="200"
              @click="toggle"
            >
              <div class="text-h3 flex-grow-1 text-center">
                {{ n }}
              </div>
            </v-card>
          </v-item>
        </v-col>
      </v-row>
    </v-container>
  </v-item-group>
</template>

<script>
import { POSSIBLE_ESTIMATIONS } from '@/constants';

export default {
  name: 'SelectEstimation',

  setup() {
    return { possibleEstimations: POSSIBLE_ESTIMATIONS };
  },

  data() {
    return { selection: null };
  },

  props: {
    state: {
      type: String,
    },
  },

  emits: {
    estimate: {
      type: Number,
    },
  },

  watch: {
    selection() {
      const estimation = this.possibleEstimations[this.selection] ?? null;

      this.$emit('estimate', estimation);
    },

    state() {
      if (this.state === 'active') {
        this.selection = null;
      }
    },
  },
};
</script>

<style scoped></style>
