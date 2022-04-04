<template>
  <div>
    <v-container fluid style="padding: 0" v-if="product !== undefined">
      <v-row>
        <v-col sm="7" style="padding-bottom: 0">
          <v-img :src="product.bannerImage" />
        </v-col>
        <v-col
          sm="5"
          class="pl-16 pt-10 pr-16"
          style="background-color: #f7f3ee"
        >
          <p class="text-h4 pt-12 pb-6">{{ product.name }}</p>
          <p class="text-h5">${{ product.price }}</p>
          <div class="d-flex align-center">
            <v-rating
              v-model="averageReview"
              :readonly="true"
              size="14"
            ></v-rating>
            <span class="grey--text text--lighten-2 text-caption ml-2">
              ({{ reviewCount }} reviews)
            </span>
          </div>
          <p>
            The {{ product.name }} coffee maker combines precision brewing,
            top-quality construction, and a design that will elevate any
            environment. Designed for perfect brewing from 16 to 40 ounces, the
            Eight uses a smart brewing algorithm to mimic hand-made pour over
            coffee.
          </p>
          <v-row class="d-flex justify-center">
            <div style="width: 320px">
              <v-btn
                class="mt-10"
                outlined
                :block="true"
                @click="addProductToCart(product)"
                >Add to cart</v-btn
              >
            </div>
          </v-row>
        </v-col>
      </v-row>
    </v-container>
    <v-container class="mt-10">
      <v-row class="my-6">
        <p class="text-h4">Reviews</p>
        <v-col sm="12" v-for="item in reviews" :key="item.id">
          <v-card
            v-if="product.id == item.productID"
            class="my-2"
            elevation="0"
          >
            <v-card-title>
              <span class="font-weight-bold mr-4">{{ "Brian Kim" }}</span>
              <small class="grey--text">{{
                new Date(item.commentedAt).toLocaleString()
              }}</small>
              <v-spacer />
              <v-rating
                :readonly="true"
                :value="parseInt(item.rating)"
                :length="5"
                small
                color="secondary"
              ></v-rating>
            </v-card-title>
            <v-card-text>
              <div class="subtitle-2">{{ item.text }}</div>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
      <h3 class="mt-5">Review the product</h3>
      <v-divider />
      <v-form @submit.prevent="submitForm">
        <v-rating
          v-model="rating"
          background-color="secondary"
          color="secondary"
        ></v-rating>
        <v-text-field
          name="input-7-1"
          class="mt-1"
          outlined
          label="Tell us your feedback about the product"
          v-model="commentedText"
        ></v-text-field>
        <div class="mt-1 text-right">
          <v-btn color="secondary" type="submit">{{ "Submit" }}</v-btn>
        </div>
      </v-form>
    </v-container>
    <v-container class="mt-10">
      <v-row class="my-6">
        <p class="text-h4" style="color: #795548">Related Products</p>
      </v-row>
      <div class="d-flex justify-space-between align-center">
        <div
          v-for="relatedProduct in relatedProducts"
          :key="relatedProduct.id"
          class="d-flex align-center justify-center"
          style="flex-direction: column; cursor: pointer"
          @click="goToProduct(relatedProduct.id)"
        >
          <v-img
            height="200"
            width="200"
            :src="relatedProduct.thumbnailImage"
          ></v-img>
          <p style="font-size: 2rem">
            {{ relatedProduct.title }}
          </p>
          <p style="font-size: 24px">$ {{ relatedProduct.price }}</p>
        </div>
      </div>
    </v-container>
  </div>
</template>

<script>
export default {
  mounted() {
    this.$store.dispatch("product/fetchProducts");
    this.$store.dispatch("product/getReviews", {
      product_id: this.$route.params.id,
    });
  },
  name: "Product",
  data: () => ({
    rating: 5,
    commentedText: "",
  }),
  computed: {
    averageReview() {
      const id = this.$route.params.id;
      const reviews = this.$store.state.product.reviews.filter(
        (p) => p.productId == id
      );
      if (reviews.length === 0) {
        return 0;
      }
      let totalReview = 0;

      for (let i = 0; i < reviews.length; i++) {
        totalReview = totalReview + reviews[i].rating;
      }
      return totalReview / reviews.length;
    },
    isLoggedIn() {
      return this.$store.state.user.isLoggedIn;
    },
    reviews() {
      const id = this.$route.params.id;
      console.log(id);
      console.log(this.$store.state.product.reviews);
      return this.$store.state.product.reviews.filter((p) => p.productID == id);
    },
    reviewCount() {
      const id = this.$route.params.id;
      return this.$store.state.product.reviews.filter((p) => p.productID == id)
        .length;
    },
    products() {
      return this.$store.state.product.products;
    },
    product() {
      const id = this.$route.params.id;
      return this.products.find((p) => p.id == id);
    },
    relatedProducts() {
      const id = this.$route.params.id;
      return this.products.filter((p) => p.id !== id);
    },
  },
  methods: {
    addProductToCart(product) {
      this.$store.commit("cart/addProductToCart", product);
      this.$store.commit("cart/toggleDrawer", true);
    },
    submitForm() {
      // if (!this.isLoggedIn) {
      //   this.$store.commit("user/setLoginDialog", true);
      //   return;
      // }
      if (this.commentedText === "") {
        this.$store.dispatch(
          "notification/showErrorMessage",
          "Review text is missing"
        );
        return;
      }
      this.$store
        .dispatch("product/addReview", {
          text: this.commentedText,
          rating: this.rating,
          product_id: this.product.id,
        })
        .then((message) => {
          console.log(message);
          this.$store.dispatch("notification/showSuccessMessage", message);
        });
    },
    goToProduct(id) {
      this.$router.push({ name: "Product", params: { id } });
    },
  },
};
</script>
