import publicApi from "@/api";

const productState = {
  namespaced: true,
  state: {
    reviews: [],
    products: [],
  },
  actions: {
    async addReview({ commit }, payload) {
      console.log(payload);
      const res = await publicApi.post("/comments/", {
        text: payload.text,
        rating: payload.rating,
        userID: 1,
        productID: payload.product_id,
        commentedAt: new Date(),
      });
      commit("addReview", res.data);
      return res.data.message;
    },
    fetchProducts({ commit }) {
      publicApi.get("/products").then((res) => {
        commit("setProducts", res.data);
      });
    },
    getReviews({ commit }) {
      publicApi.get("/comments/").then((res) => {
        console.log(res.data);
        commit("setReviews", res.data);
      });
    },
  },
  mutations: {
    setReviews(state, payload) {
      state.reviews = payload;
    },
    setProducts(state, payload) {
      state.products = payload;
    },
    addReview(state, payload) {
      const reviews = [...state.reviews];
      reviews.unshift(payload);
      state.reviews = reviews;
    },
  },
};

export default productState;
