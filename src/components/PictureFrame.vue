<template>
  <div id="app">
    <header class="top-header">
	<div class="background"></div>
	<div class="date">{{currentMonthAndDate}}</div>
	<div class="time">{{currentTime}}</div>

</header>
    <footer class="bottom-footer">Bottom Heading Bar</footer>
  </div>
</template>
<script>

export default {
   data() {
	return {
		currentTime: '',
		currentMonthAndDate: '',
	};
   },
methods: {
    updateClock() {
      const now = new Date();
      this.currentTime = now.toLocaleTimeString();
      this.currentMonthAndDate = now.toLocaleDateString('en-US', { month: 'long', day: 'numeric' });
    }
  },
  created() {
    this.updateClock();
    setInterval(this.updateClock, 1000); // Update every second
  }
};
</script>
<style>
#app {
  font-family: Arial, Helvetica, sans-serif;
  text-align: center;
  margin: 0;
  padding: 0;
  overflow-x: hidden;
}

body {
  margin: 0;
  position: fixed;
  top: 0;
  left: 0;
  padding: 0;
  height: 100%; 
  width: 100%;
  background-image: url('./homer.png');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: top;
}

.frame {
	height: 100%;
	width: 100%;
	object-fit: cover;
}
.top-header {
  height: 15%;
  padding: 10px;
  justify-content: space-between;
  display: flex;
  align-items: center;
  position: fixed;
  top: 0;
  width: 100%;
  font-size: 45px;
  font-weight: bold;
  -webkit-text-stroke: 1px black;
box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.5);
}

.background{
   position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: grey;
    opacity: 0.7;
}

.time {
	margin-right: 50%;
	opacity: 1;
	color: white;
	z-index: 1
}

.date {
	opacity: 1;
	color: white;
	z-index: 1;
} 

.bottom-footer {
  background-color: #2196F3;
  opacity: 40%;
  color: white;
  height: 15%;
  padding: 10px;
  position: fixed;
  bottom: 0;
  width: 100%;
}

.vertical-bar {
	background-color: #ccc;
	width: 100px;
	position: absolute;
	top: 60px;
	bottom: 40px;
	right: 0;
}
</style>
