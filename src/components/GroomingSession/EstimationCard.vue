<template>
  <v-col cols="12" lg="3" sm="6" xs="12">
    <v-card
      @click="handleClick"
      :disabled="disabled"
      class="card"
      :class="{ active: isSelected }"
    >
      <div class="card-content" :class="{ active: isSelected }">
        <div class="text" :class="{ 'selected-text': isSelected }">
          <h3>{{ text }}</h3>
        </div>
      </div>
    </v-card>
  </v-col>
</template>

<script>
export default {
  name: 'EstimationCard',

  props: {
    text: {
      type: Number,
      default: null,
    },
    isSelected: {
      type: Boolean,
      default: false,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
  },

  emits: {
    click: null,
  },

  methods: {
    handleClick() {
      this.$emit('click');
    },
  },
};
</script>

<style scoped>
.card {
  margin-inline: 7px;
  border-radius: 18px;
}

.card:hover {
  box-shadow: 0 0 50px #fff, -10px 0 80px #f0f, 10px 0 80px #0ff;
}

.active {
  box-shadow: inset 0 0 60px whitesmoke, inset 20px 0 80px #f0f,
    inset -20px 0 80px #0ff, inset 20px 0 300px #f0f, inset -20px 0 300px #0ff,
    0 0 50px #fff, -10px 0 80px #f0f, 10px 0 80px #0ff;
}

.card-content {
  height: 200px;
  transition: 0.4s;

  position: relative;
  background: #1a212c;
  display: flex;
  justify-content: center;
  align-content: center;
  align-items: center;
}

.text {
  opacity: 0.4;
  transition: 0.5s;
  text-align: center;
  font-size: 5em;
  color: white;
}

.card:hover .text {
  opacity: 1;
}

.selected-text {
  opacity: 1;
}
</style>
