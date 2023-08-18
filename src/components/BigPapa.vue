<template>
  <div>
    <ImageLoader v-if="isAuthenticated" @logout="logout"/> <!-- Display appropriate view based on authentication status -->
    <login-component v-else @login="handleLogin"  />
    <date-info-entry v-if="isAuthenticated"/>    
  </div>
</template>

<script>
import LoginComponent from './HelloWorld.vue'; // Import your Login component
import ImageLoader from './ImageLoader.vue';
import DateInfoEntry from './DateInfoEntry.vue';

export default {
  components: {
    LoginComponent,
    ImageLoader,  
    DateInfoEntry,  


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
    },
    logout(){
          this.isAuthenticated = false;
          console.log("yo");
    }
  }
};
</script>

