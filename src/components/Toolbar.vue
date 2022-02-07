<template>
  <div>
    <v-app-bar elevation="0">
      <a
        href="#"
        @click="$router.push({ name: 'Index' })"
        style="text-decoration: none; color: black; font-size: 2rem"
        >Cofye</a
      >
      <v-spacer></v-spacer>
      <span v-if="isLoggedIn">
        {{ loggedInUserDetail }}
      </span>
      <v-btn icon="" @click="dialog = true">
        <v-icon dark>mdi-account-outline</v-icon>
      </v-btn>
      <v-btn :icon="true" @click="drawer = !drawer">
        <v-icon>mdi-cart-outline</v-icon>
      </v-btn>
      <v-btn :icon="true" v-if="isLoggedIn" @click="logoutUser">
        <v-icon>mdi-logout</v-icon>
      </v-btn>
    </v-app-bar>
    <v-dialog v-model="dialog" width="500">
      <v-card style="width: 700px">
        <v-card-title class="text-h5 grey lighten-2"> Login </v-card-title>
        <v-form ref="form" v-model="valid" lazy-validation>
          <v-card-text>
            <v-alert type="error" v-if="errorMessage !== ''" class="mb-4">
              {{ errorMessage }}
            </v-alert>
            <v-text-field
              variant="outlined"
              prepend-inner-icon="mdi-at"
              name="email"
              label="Email"
              type="text"
              :rules="nameRules"
              v-model="email"
              required
            ></v-text-field>
            <v-text-field
              id="password"
              variant="outlined"
              prepend-inner-icon="mdi-key"
              name="password"
              label="Password"
              :rules="passwordRules"
              v-model="password"
              type="password"
              required
            ></v-text-field>
            <v-btn color="primary" class="mt-4" block @click="login">
              Login
            </v-btn>
            <v-btn
              variant="outlined"
              @click.prevent="dialog = false"
              block=""
              class="mt-5"
            >
              Close
            </v-btn>
          </v-card-text>
        </v-form>
      </v-card>
    </v-dialog>
    <v-navigation-drawer
      :width="360"
      v-model="drawer"
      temporary
      absolute
      right
      class="px-2"
    >
        <div>
          <div>
          <div class="py-6 font-weight-bold display-1">Shopping cart</div>
          <v-divider />
          <div v-for="cartItem in cartItems" :key="cartItem.slug" class="mt-2">
            <div class="d-flex">
              <v-img :width="75" :height="75" :src="cartItem.image" />
              <div class="ml-1">
                <div class="d-flex justify-space-between">
                  <div class="font-weight-bold">
                    {{ cartItem.name }}
                  </div>
                  <v-icon size="small" @click="removeItem(cartItem)"
                    >mdi-close</v-icon
                  >
                </div>
                <div class="d-flex mt-3 justify-space-between">
                  <div style="max-width: 60%">
                    <v-text-field
                      class="pr-15"
                      solo
                      hide-details="auto"
                      dense
                      readonly
                      prepend-inner-icon="mdi-minus"
                      append-icon="mdi-plus"
                      :value="cartItem.quantity"
                      @click:prepend-inner="decrement(cartItem)"
                      @click:append="increment(cartItem)"
                    >
                    </v-text-field>
                  </div>
                  <div class="d-flex justify-end">
                    $&nbsp;&nbsp;{{ cartItem.quantity * cartItem.price }}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div v-if="cartItems.length === 0">
            <div class="py-6 font-weight-bold">No items in shopping cart</div>
          </div>
          </div>

          <div class="mt-8">
            <v-btn color="primary" block="" elevation="0" v-if="cartItems.length > 0" @click="proceedToCheckout">
              {{isLoggedIn?"Login":"Proceed to checkout"}}
            </v-btn>
          </div>
        </div>

    </v-navigation-drawer>
  </div>
</template>

<script>
export default {
  data() {
    return {
      valid: true,
      errorMessage: "",
      nameRules: [(v) => !!v || "Email is required"],
      passwordRules: [(v) => !!v || "Password is required"],
      email: "",
      password: "",
    };
  },
  name: "Toolbar",
  methods: {
    handleClose(val) {
      console.log(val);
    },
    proceedToCheckout(){
      this.$router.push({
        name:"CheckoutPage"
      })
    },
    logoutUser() {
      this.$store.commit("user/setLoggedIn", false);
    },
    login() {
      this.errorMessage = "";
      if (!this.$refs.form.validate()){
        return;
      }
      if (this.email === "hi@test.com" && this.password === "password") {
        this.$store.commit("user/setLoggedIn", true);
        this.dialog = false;
      } else {
        this.errorMessage = "Email or password is incorrect";
      }
    },
    increment(product) {
      this.$store.commit("cart/increment", product);
    },
    decrement(product) {
      this.$store.commit("cart/decrement", product);
    },
    removeItem(product) {
      this.$store.commit("cart/removeItem", product);
    },
  },
  computed: {
    loggedInUserDetail() {
      return this.$store.state.user.userDetail.name;
    },
    isLoggedIn() {
      return this.$store.state.user.isLoggedIn;
    },

    cartItems() {
      return this.$store.state.cart.items;
    },
    drawer: {
      get() {
        return this.$store.state.cart.drawer;
      },
      set(val) {
        this.$store.commit("cart/toggleDrawer", val);
      },
    },
    dialog: {
      get() {
        return this.$store.state.user.dialog;
      },
      set(val) {
        this.$store.commit("user/setLoginDialog", val);
      },
    },
  },
};
</script>

<style scoped></style>
