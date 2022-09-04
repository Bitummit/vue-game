<script>

import Settings from '@/components/Settings.vue'

export default {
  name: "SettingsView",
  components: {Settings},
  methods: {
    onSettings(data) {
      console.log('Picked', data)
    }
  }

}

</script>

<template>
  <body>
    <Settings @changeSettings='onSettings'/>
  </body>


</template>

<style scoped>

</style>