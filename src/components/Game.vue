<script>
export default {
  name: "Game",
  data: () => ({
    currentTime: 200,
    timer: null,
  }),
  mounted() {
    this.startTimer()
  },
  destroyed() {
    this.stopTimer()
  },
  methods: {
    startTimer() {
      this.timer = setInterval(() => {
        this.currentTime--
      }, 1000)
    },
    stopTimer() {
      clearTimeout(this.timer)
    },
  },
  watch: {
    currentTime(time) {
      if (time === 0) {
        this.stopTimer()
      }
    }
  },
}
</script>

<template>

  <body>
  <div class="head">
  <RouterLink to="/">
    <button type="button" class="btn btn-primary mt-3">back</button>
  </RouterLink>
    <div class="timer mt-3">
  <div>{{currentTime}}</div>
      </div>
    </div>
  <br>
  <br>
  <br>

  <div style="text-align: center">
    StartNumber *
    <input style="width: 5%" maxlength="2">
    *
    <input style="width: 5%" maxlength="2">
    <p style="text-align: center" class="mt-2">= Result</p>
  </div>
  <RouterLink to="/game"><button style="float: right" type="button" class="btn btn-primary mt-3">=</button></RouterLink>



  </body>
</template>


<style scoped>
.head {
    width: 100%;
}
.timer {
  text-align: center;
  background: #f0f8ff;
  float: right;
  font-size: 20px;
  border: solid cornflowerblue;
  width: 30%;
}


</style>