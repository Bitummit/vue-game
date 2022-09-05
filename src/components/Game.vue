<script>
export default {
  name: "Game",
  data: () => ({
    currentTime: 0,
    timer: null,
    dif: 0,
    operations: [],
    numbers: [],
    result: 0,
    firstOperation: "",
    secondOperation: "",
    answer1: 0,
    answer2: 0,
  }),

  mounted() {
    this.refreshData()
    this.currentTime = this.$store.state.time * 60
    this.startTimer()

  },
  destroyed() {
    this.stopTimer()
  },
  methods: {
    startTimer() {
      this.timer = setInterval(() => {
        this.currentTime --
      }, 1000)
    },
    stopTimer() {
      clearTimeout(this.timer)
      this.$router.push(
          {
            name: 'settings',
          })
    },
    getRandomNumber() {
      let min = 1
      let max = 20
      if (this.dif <= 3) {
        max = 20
      }
      else if (this.dif > 3 || this.dif < 7 ) {
        max = 60
      } else {
        max = 130
      }
      let rand = min + Math.random() * (max + 1 - min)
      return Math.floor(rand)
    },
    getRandomOperation() {
      let operator = this.operations[Math.floor(Math.random() * this.operations.length)]
      return operator

    },
    checkAnswer() {

      let answer = this.getResult(this.answer1, this.answer2)
      if (answer === this.result) {
        this.$store.commit('increment')
        this.clearData()
        this.refreshData()

      }
    },
    clearData() {
      this.numbers = []
    },
    refreshData() {
      this.operations = this.$store.state.operations
      this.dif = this.$store.state.difficulty

      let maxNumbers = 2
      this.firstOperation = this.getRandomOperation()
      if (this.dif > 5) {
        maxNumbers = 3
        this.secondOperation = this.getRandomOperation()
      }
      for (let i = 0; i < maxNumbers; i++)
        this.numbers.push(this.getRandomNumber().toString())
      this.result = this.getResult(this.numbers[1], this.numbers[2])

    },
    getResult(firstNumber, secondNumber) {
      let result = 0
      if (this.numbers.length === 3) {
        result = eval(this.numbers[0] + this.firstOperation + firstNumber + this.secondOperation + secondNumber)
      } else {
        result = eval(this.numbers[0] + this.firstOperation + firstNumber)
      }
      return result

    }
  },
  watch: {
    currentTime(time) {
      if (time === -1) {
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
    <button type="button" class="btn btn-primary mt-3">Exit</button>
  </RouterLink>
    <div class="timer mt-3">
  <div>{{currentTime}}</div>
      </div>
    </div>
  <br>
  <h1 style="text-align: center">Сложность {{dif}}</h1>
  <br>

  <div style="text-align: center">
    {{ numbers[0] }}
    {{ firstOperation }}
    <input style="width: 5%" maxlength="2" v-model="answer1" v-on:keyup.enter="checkAnswer">
    <span v-if="dif > 5">
      {{ secondOperation }}
      <input style="width: 5%" maxlength="2" v-model="answer2" v-on:keyup.enter="checkAnswer">
    </span>
    <p style="text-align: center" class="mt-2">= {{result}}</p>
  </div>
  <button style="float: right" type="button" @click="checkAnswer" class="btn btn-primary mt-3">=</button>



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