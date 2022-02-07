<template>
   Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium aperiam atque aut dignissimos distinctio eaque eum id maiores nobis, quisquam repellendus repudiandae ullam vel, voluptas voluptatibus? Blanditiis cumque omnis totam.

</template>

<script>
export default {
  name: "Login",
  data(){
    return {
      tDrawer:false,
    }
  },
  methods:{

    increment(product){
      this.$store.commit("cart/increment",product)
    },
    decrement(product){
      this.$store.commit("cart/decrement",product)
    },
    removeItem(product){
      this.$store.commit("cart/removeItem",product)
    }
  },
  computed:{
    cartItems(){
      return this.$store.state.cart.items;
    },
    drawer:{
      get(){
        return this.$store.state.cart.drawer
      },
      set(val){
        this.$store.commit("cart/toggleDrawer",val)
      }
    },
  }
}
</script>

<style scoped>

</style>