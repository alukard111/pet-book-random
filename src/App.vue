<template>
  <div id="app">
    <router-link to="/signin" v-if="!$store.state.auth.user">sign in {{ getStateUser }}</router-link>

    <router-view></router-view>
  </div>
</template>

<script>
export default {
  created() {
    
    
  },

  beforeMount() {
    
    },
  mounted() {},

  computed: {
    getStateUser() {
    },

    getAuthChange() {
    }
  },


};
</script>


<style>

</style>