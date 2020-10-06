<template>
  <v-app>
    <router-view></router-view>
  </v-app>
</template>

<script>
import axios from 'axios'

export default {
  name: 'App',
  data: () => ({
    info: null
  }),
  mounted () {
    axios
      .get('https://api.coindesk.com/v1/bpi/currentprice.json')
      .then(response => (this.info = response))
  }
};
</script>
