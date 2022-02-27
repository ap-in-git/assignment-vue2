<template>
  <v-layout justify-center>
    <v-row>
      <v-col cols="6" offset="3" class="my-12">
        <div class="display-1 font-weight-bold">Cart</div>
        <v-alert type="success" v-if="showCheckoutMessage">
          Checked out successfully
        </v-alert>
        <div v-if="cartItems.length">
          <v-card
              elevation="0"
              v-for="cart in cartItems"
              :key="cart.id"
              class="my-2"
          >
            <v-card-title>
              <v-btn
                  plain
                  color="secondary"
                  class="text-capitalize font-weight-bold title"
                  :to="{ name: 'Product', params: { id: cart.id } }"
              >{{ cart.name }}
              </v-btn>
              <v-spacer />
              <v-btn
                  icon
                  @click="showCart"
              >
                <v-icon>mdi-pencil</v-icon>
              </v-btn>
              <v-btn icon @click="removeItem(cart)">
                <v-icon>mdi-delete</v-icon>
              </v-btn>
            </v-card-title>
            <v-card-text>
              <v-img
                  class="my-2"
                  :src="cart.image"
                  width="100px"
                  contain
              />
              <span class="font-weight-bold"
              >Price : $ {{ cart.price * cart.quantity }}</span
              >
            </v-card-text>
          </v-card>
          <div class="title font-weight-bold text-right my-5">
            Total: $ {{ totalPrice }}
            <v-btn color="secondary" class="ml-2" @click="confirmCheckout"
            >Confirm
            </v-btn>
          </div>
        </div>
        <div v-else>
          <div class="justify-center text-center display-1 grey--text my-12">
            <div>No items in cart.</div>
            <br />
            <v-btn outlined rounded color="secondary" to="/"
            >Start Shopping
            </v-btn>
          </div>
        </div>
      </v-col>
    </v-row>
  </v-layout>


</template>

<script>
export default {
  name: "CheckoutPage",
  data(){
    return {
      showCheckoutMessage: false
    }
  },
  methods:{
    confirmCheckout(){
      this.showCheckoutMessage = true
      this.$store.commit("cart/emptyCart")
    },
    addProductToCart(product) {
      this.$store.commit("cart/addProductToCart",product)
      this.$store.commit("cart/toggleDrawer",true)
    },
    removeItem(product) {
      this.$store.commit("cart/removeItem", product);
    },
    showCart(){
      this.$store.commit("cart/toggleDrawer", true);

    }
  },
  computed:{

    totalPrice(){
      let total  = 0;
      this.cartItems.forEach( fe => {
        total = fe.quantity * fe.price + total
      })
      return total;
    },
    cartItems() {
      return this.$store.state.cart.items;
    },
    products(){
      return this.$store.state.product.products;
    }
  },
}
</script>
