<template>
    <div class="image-loader-container">
    <input type="file" @change="handleFileChange" class="file-input" />
    <img v-if="imageSrc" :src="imageSrc" alt="Uploaded Image" class="uploaded-image">
    <button v-if="imageSrc" class="buttonClass" @click="logout">LOAD</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      imageSrc: null
    };
  },
  methods: {
    handleFileChange(event) {
      const file = event.target.files[0];
      if (file) {
        this.loadImage(file);
      }
    },
    loadImage(file) {
      const reader = new FileReader();
      reader.onload = event => {
        this.imageSrc = event.target.result;
      };
      reader.readAsDataURL(file);
    },
      logout(){
        this.$emit('logout');
      }
  }
};
</script>

<style scoped>
/* Add your component-specific styles here */
.image-loader-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  min-height: 100vh;
}

.file-input {
  margin-top: 50px; /* Adjust the margin to position the button */
  padding: 10px;
}

.uploaded-image {
  margin-top: 20px; /* Space between the button and the image */
  max-width: 100%;
  height: auto;
}

.buttonClass{
    margin-top: 40px;
    width: 100px;
    height: 40px;
    border-radius: 3px;
    background-color: hsla(50, 100%, 50%, .9);

}
</style>

