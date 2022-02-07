const productState = {
    namespaced: true,
    state: {
        reviews:[{
    _id:1,
    commentedAt: "2021-10-12 15:04:15",
    rating:3,
    text:"The spout to pour is inconvenient and has you put the carafe at odd angles to get the last quarter of coffee out. The design for any non black machine is bad. The carafe spout is white while the base is your machine color and the handle is metal. It hurts the aesthetics of the machine. Overall would not buy again and would just get the glass",
    commentedBy:"Ashok Poudel",
    slug:"cofye-a",
}],
       products: [
           {
           name:"COFYE A",
           slug:"cofye-a",
           price:100,
           bannerImage:"https://cld.accentuate.io/4020085030965/1638485544077/ratio-thermal-set.jpg",
           image:"https://m.media-amazon.com/images/I/713WT1qni0L._AC_SX466_.jpg"
           },
           {
               name:"COFYE B",
               slug:"cofye-b",
               price:200,
               bannerImage: "https://cld.accentuate.io/4020085030965/1638485544077/ratio-thermal-set.jpg?v=0&options=w_1500,h_1000,c_fill",
               image:"https://cdn.shopify.com/s/files/1/0215/8508/products/ratio8-white-parawood-thermal-A2-white_4653c164-f6ee-4392-9770-4ef487b589fd_360x.png?v=1628810650"
           },
           {
               name:"COFYE C",
               slug:"cofye-c",
               price:300,
               bannerImage: "https://images.accentuate.io/?image=https%3A%2F%2Fcdn.accentuate.io%2F3729191927861%2F1627419352293%2Fratio-six-hero-black.jpg%3Fv%3D0&c_options=w_1500,h_1000,c_fill",
               image: "https://cdn.shopify.com/s/files/1/0215/8508/products/ratio6-black-A3_360x.jpg?v=1628633076"
           },
           {
               name: "COFYE D",
               slug:"cofye-d",
               bannerImage: "https://images.accentuate.io/?image=https%3A%2F%2Fcdn.accentuate.io%2F3732328775733%2F1630105287468%2Fratio-studio-may-21-v2-51-(1).jpg%3Fv%3D0&c_options=ar_1.6,c_fill,w_1200",
               price:400,
               image:"https://cdn.shopify.com/s/files/1/0215/8508/products/ratio-eight-thermal-carafe-matte-black-with-dripper_360x.jpg?v=1628607028"
           },
           {
               name: "COFYE E",
               slug: "cofye-e",
               bannerImage: "https://images.accentuate.io/?image=https%3A%2F%2Fcdn.accentuate.io%2F6679887478952%2F1630090094947%2FLifestyle_Stagg_Kettle_01-v1619128171709.jpeg%3Fv%3D0&c_options=ar_1.6,c_fill,w_1200",
               price:500,
               image: "https://cdn.shopify.com/s/files/1/0215/8508/products/Black-Stagg-EKG-wood-handle-hero-shot_360x.jpg?v=1619543706"
           },
           {
               name: "COFYE F",
               slug: "cofye-f",
               bannerImage: "https://images.accentuate.io/?image=https%3A%2F%2Fcdn.accentuate.io%2F4359846363274%2F1630352720107%2FRatio-Eight-Matte-Black-Details82-(1).jpg%3Fv%3D0&c_options=ar_1.6,c_fill,w_1200",
               price: 600,
               image: "https://www.salton.com/wp-content/uploads/2021/08/FC2074_GB_Main-1.jpg"
           }]
    },
    actions: {

    },
    mutations: {
        addReview(state, payload) {
            const reviews = [...state.reviews]
            reviews.unshift(payload);
            state.reviews = reviews;
        },
    },
};

export default productState;
