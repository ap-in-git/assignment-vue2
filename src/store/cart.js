
const cartState = {
    namespaced: true,
    state: {
        items:[],
        drawer:true,
    },
    actions: {

    },
    mutations: {
        emptyCart(state){
            state.items = []
        },
        increment(state,payload) {
            const items = [...state.items];
            for (let i = 0; i <items.length ; i++) {
                if (items[i].id === payload.id) {
                    items[i].quantity = items[i].quantity + 1;
                }
            }
            state.items = items
        },
        removeItem(state,payload) {
            let items = [...state.items];
            items = items.filter( it =>it.id !== payload.id)

            state.items = items
        },
        decrement(state,payload) {
            let items = [...state.items];
            let removeProduct = false;
            for (let i = 0; i <items.length ; i++) {
                if (items[i].id === payload.id) {
                    if (items[i].quantity > 1){
                        items[i].quantity = items[i].quantity - 1;
                    }else{
                        removeProduct = true
                    }
                }
            }
            if (removeProduct){
                items = items.filter( it =>it.id !== payload.id)
            }
            state.items = items
        },
        toggleDrawer(state,val){
            state.drawer = val
        },
        addProductToCart(state, payload) {
            const items = [...state.items];
            let itemFound = false
            for (let i = 0; i <items.length ; i++) {
                if (items[i].id === payload.id) {
                    itemFound = true
                    items[i].quantity = items[i].quantity + 1;
                }
            }
            if (!itemFound){
                items.unshift({...payload,quantity:1})
            }
            state.items = items
        },
    },
};

export default cartState;
