<template>
    <div class="login-container">
    <h2>Login</h2>
    <form @submit.prevent="login" class="login-form">
      <div class="input-group">
        <label for="username">Username:</label>
        <input type="text" id="username" v-model="username" class="input-field" />
      </div>
      <div class="input-group">
        <label for="password">Password:</label>
        <input type="password" id="password" v-model="password" class="input-field" />
      </div>
      <button type="submit" class="login-button">Login</button>
    </form>
    <p v-if="fail" class="failMsg">Invalid Username | Password</p>
    <img src="@/assets/logo.png" alt="Background Image" class="background-image" />
  </div>
 </template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    fail: Boolean,
  },
    data() {
        return {
           username: '',
           password: '', 
        };
    },
    methods: {
        login() {
            const user = { username: this.username, password: this.password };
            this.$emit('login', user);
        },
    }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
body {
    background-color: #555555;
    margin: 0 !important;
}
.login-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background-color: #555555;
  margin: 0;
  padding: 0;
  margin-top: -50px;
}

.login-form {
  background-color: hsla(50, 100%, 50%, .9);
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
  width: 300px;
  margin-top: 90px;

}

.input-group {
  margin-bottom: 15px;
}

.label {
  font-weight: bold;
  margin-bottom: 5px;
}

.input-field {
  width: 90%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
}

.login-button {
  display: block;
  width: 100%;
  padding: 10px;
  background-color: hsla(201, 100%, 50%, 1);
  color: #ffffff;
  border: none;
  border-radius: 5px;
  font-size: 15pt;
  font-style: bold;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.login-button:hover {
  background-color: #0056b3;
}

.failMsg {
  color: red;
  margin-top: 20px;
}
</style>
