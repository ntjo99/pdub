<template>
  <div class="date-entry">
    <label for="date-picker">Select a Date:</label>
    <input
      id="date-picker"
      type="date"
      v-model="selectedDate"
    />

    <label for="info-text">Information:</label>
    <textarea
      id="info-text"
      rows="4"
      v-model="info"
    ></textarea>
  </div>
</template>

<script>
export default {
  data() {
    return {
      selectedDate: null,
      info: ''
    };
  }
};
</script>

<style>
.date-entry {
  margin: 20px;
}
</style>

