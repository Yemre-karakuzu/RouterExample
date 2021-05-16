<template>
  <div class="container">
    <router-view></router-view> 
    <!-- children route varsa router-view kullanılması gerekir. -->
    <hr>
    <button class="btn btn-success"  @click="navigateToHome">Home Component</button>
  <hr>
  </div>
</template>
<script>
  export default {
    data(){
      return{
        id:this.$route.params.id
      }
    },
    watch:{
      "$route"(to){
        this.id=to.params.id
      }
    },
    methods:{
      navigateToHome(){
        this.$router.push("/") // 1.yol  sadece path verilir. 
        // this.$router.push({path:"/"}) // 2. yol obje nin içinde path verilir.
        // this.$router.push({name:Home}) // 2. yol objenin içinde name verilir.
      }
    }
  }
</script>
