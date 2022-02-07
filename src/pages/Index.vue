<template>
  <div>
  <v-row class="text-center bg-orange-accent-2 lighten-4" style="height: 600px">
    <v-col cols="6" offset="1" class="align-self-center">
      <div>
        <div class="mt-12 pt-12 font-weight-thin display-2">
          Shopping made easy
        </div>
        <div class="py-6 font-weight-bold display-3">
          Coffee machine at affordable price
        </div>
        <v-btn
            variant="outlined"
            color="secondary"
            @click="$router.push({name:'ProductPage'})"
        >
          <span>Start shopping</span>
          <v-icon>mdi-arrow-right</v-icon>
        </v-btn>
      </div>
    </v-col>
    <v-col cols="3" class="align-self-center">
      <v-img :src="require('../assets/photo-1588931196804-75b9cb0cd2a1.jpeg')" />
    </v-col>
  </v-row>
  <product-list/>
  </div>
</template>

<script>
import ProductList from "../components/ProductList";
export default {
  name: "Index",
  components: {ProductList},
}
</script>
<style scoped>

</style>
