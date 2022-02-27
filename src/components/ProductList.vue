<template>
  <v-container>
    <div class="display-1 font-weight-bold">Products</div>
    <v-row wrap>
      <v-col cols="3" v-for="product in products" :key="product.id">
        <v-card
          elevation="1"
          class="my-4 py-4"
        >
          <v-card-text class="text-center">
            <v-img
              class="v-card--link"
              height="125"
              contain
              :src="product.thumbnail_image"
            />
            <div class="mt-4">
              <v-btn
                elevation="0"
                color="secondary"
                class="text-capitalize font-weight-bold title"
                @click="redirectToProduct(product.id)"
                >{{ product.title }}
              </v-btn>
            </div>
            <div class="subtitle my-2 font-weight-bold">
              $ {{ product.price }}
            </div>
            <div class="d-flex">
              <v-btn
                  elevation="0"
                  small
                  rounded
                  @click.prevent="redirectToProduct(product.id)"
              >View product
              </v-btn>
              <v-btn
                  class="ml-3"
                  elevation="0"
                  small
                  rounded
                  @click.prevent="addProductToCart(product)"
              >Add to cart
              </v-btn>
            </div>

          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>

export default {
  name: 'ProductList',
  methods: {
    addProductToCart(product) {
      this.$store.commit('cart/addProductToCart', product);
      this.$store.commit('cart/toggleDrawer', true);
    },
    redirectToProduct(id){
      this.$router.push({
        name:"Product",
        params:{
          id:id
        }}
      )
    }
  },
  mounted() {
     this.$store.dispatch("product/fetchProducts")
  },
  computed: {
    products() {
      return this.$store.state.product.products;
    },
  },
};
</script>
