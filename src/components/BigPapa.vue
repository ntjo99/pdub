<template>
  <div>
    <ImageLoader v-if="isAuthenticated" /> <!-- Display appropriate view based on authentication status -->
    <login-component v-else @login="handleLogin" />
  </div>
</template>

<script>
import LoginComponent from './HelloWorld.vue'; // Import your Login component
import ImageLoader from './ImageLoader.vue';
export default {
  components: {
    LoginComponent,
    ImageLoader 

  },
  data() {
    return {
      isAuthenticated: false,
      user: null
    };
  },
  methods: {
    handleLogin(user) {
      // Check user credentials here
      if (user.username === 'validUsername' && user.password === 'validPassword') {
        this.isAuthenticated = true;
        this.user = user;
      } else {
        console.log('Invalid credentials');
      }
    }
  }
};
</script>

