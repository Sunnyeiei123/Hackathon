<template>
  <v-app :style="{ backgroundColor: RouteBackgroundColor }">
    <router-view />
  </v-app>
</template>


<script>
export default {
  computed: {
    RouteBackgroundColor() {
      const routeColor = this.$route.matched[0].meta.backgroundColor;
      const defaultBackgroundColor = "#F8FFF9"; 
      if (routeColor) {
        return routeColor;
      } else {
        return defaultBackgroundColor;
      }
    },
  },
};
</script>