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
    <input type="range" class="custom-range mt-3" min="0" max="20" id="customRange2">
    <br>
    <label for="customRange2">Длительность N минут</label>
  </div>
  <div>
    <input type="range" class="custom-range mt-1" min="0" max="10" id="customRange">
    <br>
    <label for="customRange">Сложность N</label>
  </div>
  <div class="form-check">
  <input class="form-check-input" type="checkbox" value="" id="defaultCheck1">
  <label class="form-check-label" for="defaultCheck1">
    Суммирование
  </label>
</div>
  <div class="form-check">
  <input class="form-check-input" type="checkbox" value="" id="defaultCheck2">
  <label class="form-check-label" for="defaultCheck2">
    Разность
  </label>
</div>
  <div class="form-check">
  <input class="form-check-input" type="checkbox" value="" id="defaultCheck3">
  <label class="form-check-label" for="defaultCheck3">
    Умножение
  </label>
</div>
  <div class="form-check">
  <input class="form-check-input" type="checkbox" value="" id="defaultCheck4">
  <label class="form-check-label" for="defaultCheck4">
    Деление
  </label>
</div>

  <a class="btn btn-primary mt-5" href="#" role="button">Start</a>

</template>

<script>
export default {
  name: "Settings"
}
</script>

<style scoped>

</style>