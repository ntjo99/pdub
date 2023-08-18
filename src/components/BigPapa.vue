<template>
  <div>
      <h1 v-if="isAuthenticated" class="title">{{message}}</h1>
    <ImageLoader v-if="isAuthenticated" @logout="logout"/> <!-- Display appropriate view based on authentication status -->
    <login-component v-else @login="handleLogin" :fail="fail" />    
    <date-info-entry v-if="isRA"/>    
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
      isRA: false,
      fail: false,  
      user: null,
      message: '', 
    };
  },
  methods: {
    handleLogin(user) {
      // Check user credentials here
      if (user.username === 'pdub' && user.password === 'kimjungun') {
        this.isAuthenticated = true;
        this.user = user;
        this.message = 'PDUB -COMMON';  
      } else if (user.username === 'pdubLeader' && user.password === 'hailGerding') {
            this.isAuthenticated = true;
            this.isRA = true;
            this.message = 'PDUB -PERSONAL ASSISTANT';
      } else {
            console.log('Invalid credentials');
            this.fail = true;
      }
    },
    logout(){
          this.isAuthenticated = false;
          console.log("yo");
    } 
  }
};
</script>
<style>
.title{
    display: flex;
    justify-content: center;
    align-items: flex-start;
    margin-top: 50px;
}
</style>
