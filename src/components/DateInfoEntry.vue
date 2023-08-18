<template>
<div class="centered-container">
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
.centered-container {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: -700px;
  min-height: 40vh;
}

.date-entry {
  background-color: #f0f0f0;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  max-width: 400px;
  width: 90%;
}

.date-entry label {
  display: block;
  margin-bottom: 5px;
}

.date-entry input,
.date-entry textarea {
  width: 90%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  margin-bottom: 15px;
}
</style>

