<template>
<div class="container">
  <div class="row">
    <div class="col-md-12">
      <br>
      <Header></Header>
      <hr>
      <router-view></router-view>
    </div>
  </div>
</div>
</template>

<script>
import Header from "./components/Header"
export default {
  components:{
    Header,
  }
}
</script>

<style>

</style>
