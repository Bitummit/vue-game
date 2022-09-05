<template>

  <h1>Привет!</h1>
  <div class="mt-3">
    <p>Добро пожаловать на тенировочный день,</p>
    <p>Ваш последний результат - решено {{countGames}} за {{lastTime}} минут на сложности {{lastDif}}.</p>
  </div>

  <br>
  <br>
  <h2>Настройки</h2>
  <div>
    <input type="range" class="custom-range mt-3" min="1" max="20" v-model='time' id="customRange2">
    <br>
    <label for="customRange2">Длительность {{time}} минут</label>
  </div>
  <div>
    <input type="range" class="custom-range mt-1" min="1" max="10" v-model='difficulty' id="customRange">
    <br>
    <label for="customRange">Сложность {{difficulty}}</label>
  </div>
  <div class="form-check">
    <input class="form-check-input" type="checkbox" value="+" v-model="checkedSettings" id="defaultCheck1">
    <label class="form-check-label" for="defaultCheck1">
      Суммирование
    </label>
  </div>
  <div class="form-check">
    <input class="form-check-input" type="checkbox" value="-" v-model="checkedSettings" id="defaultCheck2">
    <label class="form-check-label" for="defaultCheck2">
      Разность
    </label>
  </div>
  <div class="form-check">
    <input class="form-check-input" type="checkbox" value="*" v-model="checkedSettings" id="defaultCheck3">
    <label class="form-check-label" for="defaultCheck3">
      Умножение
    </label>
  </div>
  <div class="form-check">
    <input class="form-check-input" type="checkbox" value="/" v-model="checkedSettings" id="defaultCheck4">
    <label class="form-check-label" for="defaultCheck4">
      Деление
    </label>
  </div>
    <RouterLink :to="{name: 'game'}"><button type="button" class="btn btn-primary mt-3" @click='setValues' :disabled="checkedSettings.length === 0">start</button></RouterLink>
</template>

<script>
export default {
  name: "Settings",
  data: () => ({
    checkedSettings: [],
    time: 1,
    difficulty: 1,
    countGames: 0,
    lastTime: 0,
    lastDif: 0
  }),
  mounted() {
    if (localStorage.countGames) {
      this.countGames = this.$store.state.countGames
    }
    if (localStorage.time) {
      this.lastTime = this.$store.state.time
    }
    if (localStorage.difficulty) {
      this.lastDif = this.$store.state.difficulty
    }
  },

  methods: {
    setValues() {
      this.$store.commit('setTimeValue', this.time);
      this.$store.commit('setDifValue', this.difficulty);
      this.$store.commit('setOperationsValue', this.checkedSettings)
      this.$store.commit('setCountGamesValue', 0);

    },

  },


}
</script>

<style scoped>

</style>