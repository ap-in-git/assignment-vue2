import publicApi from "@/api";

const productState = {
    namespaced: true,
    state: {
       reviews:[],
       products: []
    },
    actions: {
        async addReview({commit},payload){
            const formData = new FormData();
            formData.append("text",payload.text)
            formData.append("rating",payload.rating)
            formData.append("user_id",'62309e195e765c1ba9f28af2')
            formData.append("product_id",payload.product_id)
            const res = await publicApi.post("/comments/",formData);
            commit("addReview",res.data.comment)
             return res.data.message;

        },
        fetchProducts({commit}){
            publicApi.get("/products").then( res => {
                commit("setProducts",res.data)
            })
        },
        getReviews({commit},payload){
            publicApi.get("/comments/"+payload.product_id).then((res) => {
                commit("setReviews",res.data)
            })
        }
    },
    mutations: {
        setReviews(state,payload) {
          state.reviews = payload
        },
        setProducts(state,payload){
            state.products = payload
        },
        addReview(state, payload) {

            const reviews = [...state.reviews]
            reviews.unshift(payload);
            state.reviews = reviews;
        },
    },
};

export default productState;
