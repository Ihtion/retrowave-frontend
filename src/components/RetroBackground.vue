<template>
  <div class="root">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'RetroBackground',
};
</script>

<style scoped>
.root {
  height: 100%;
  background-image: url('../assets/retro.jpg');
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
}
</style>
