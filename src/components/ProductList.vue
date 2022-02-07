<template>
  <v-container>
    <div class="display-1 font-weight-bold">Products</div>
    <v-row wrap>
      <v-col cols="3" v-for="product in products" :key="product.slug">
        <v-card
          elevation="1"
          class="my-4 py-4"
        >
          <v-card-text class="text-center">
            <v-img
              class="v-card--link"
              height="125"
              contain
              :src="product.image"
            />
            <div class="mt-4">
              <v-btn
                elevation="0"
                color="secondary"
                class="text-capitalize font-weight-bold title"
                >{{ product.name }}
              </v-btn>
            </div>
            <div class="subtitle my-2 font-weight-bold">
              $ {{ product.price }}
            </div>
            <v-btn
              elevation="0"
              small
              rounded
              @click.prevent="addProductToCart(product)"
              >Add to cart
            </v-btn>
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
      console.log(product)
      this.$store.commit('cart/addProductToCart', product);
      this.$store.commit('cart/toggleDrawer', true);
    },
  },
  computed: {
    products() {
      return this.$store.state.product.products;
    },
  },
};
</script>
