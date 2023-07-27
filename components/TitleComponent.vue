<script setup lang="ts">
const props = defineProps({
  text: {
    type: String,
    required: true,
  },
  size: {
    type: String,
    required: true,
  },
});
const styles = {
  fontFamily: "var(--inter900)",
  fontSize: "108px",
  fontWeight: "900",
  lineHeight: "116px",
  letterSpacing: "0em",
  textTransform: "uppercase",
  color: "white",
  textAlign: "center",
  maxWidth: props.size + "px",
};
</script>

<template>
  <div class="container">
    <div class="d-flex justify-content-center">
      <h1 class="title" :style="styles">{{ text }}</h1>
    </div>
  </div>
</template>