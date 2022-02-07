<template>
  <div>
    <div style="padding-top: 80px;height: calc(100vh - 8px )" >
    <product-list/>
   </div>
  </div>

</template>

<script>
import ProductList from "../components/ProductList";
export default {
  name: "ProductPage",
  components: { ProductList},
};
</script>
