<template>

  <h1>Привет!</h1>
  <div class="mt-3">
    <p>Добро пожаловать на N тенировочный день,</p>
    <p>Ваш последний результат - решено N из 20.</p>
    <p>Общая точночть N.</p>
  </div>

  <br>
  <br>
  <h2>Настройки</h2>
  <div>
    <input type="range" class="custom-range mt-3" min="0" max="20" v-model='time' id="customRange2">
    <br>
    <label for="customRange2">Длительность {{time}} минут</label>
  </div>
  <div>
    <input type="range" class="custom-range mt-1" min="0" max="10" v-model='difficulty' id="customRange">
    <br>
    <label for="customRange">Сложность {{difficulty}}</label>
  </div>
  <div class="form-check">
    <input class="form-check-input" type="checkbox" value="Sum" v-model="checkedSettings" id="defaultCheck1">
    <label class="form-check-label" for="defaultCheck1">
      Суммирование
    </label>
  </div>
  <div class="form-check">
    <input class="form-check-input" type="checkbox" value="Sub" v-model="checkedSettings" id="defaultCheck2">
    <label class="form-check-label" for="defaultCheck2">
      Разность
    </label>
  </div>
  <div class="form-check">
    <input class="form-check-input" type="checkbox" value="Mul" v-model="checkedSettings" id="defaultCheck3">
    <label class="form-check-label" for="defaultCheck3">
      Умножение
    </label>
  </div>
  <div class="form-check">
    <input class="form-check-input" type="checkbox" value="Div" v-model="checkedSettings" id="defaultCheck4">
    <label class="form-check-label" for="defaultCheck4">
      Деление
    </label>
  </div>

<!--  <button class="btn btn-primary mt-5" @click='changeSettings' role="button">Start</button>-->
    <RouterLink to="/game"><button type="button" class="btn btn-primary mt-3" @click='changeSettings'>start</button></RouterLink>
</template>

<script>
export default {
  name: "Settings",
  data: () => ({
    checkedSettings: [],
    time: 0,
    difficulty: 0,
  }),

  methods: {
    changeSettings () {
      this.$emit('changeSettings', {
        checkedSettings: this.checkedSettings,
        time: this.time,
        difficulty: this.difficulty,
      })
    }
  },


}
</script>

<style scoped>

</style>