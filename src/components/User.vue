<template>
  <div class="container">
    <h3>User Component</h3>
    <hr>
    <p>User ID: {{id}}</p>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis, earum libero odit optio repellendus sed
      soluta? Animi, atque blanditiis commodi consequatur distinctio dolorem eaque eos expedita, modi reprehenderit
      repudiandae soluta.
    </p>
    <hr>
    <button class="btn btn-success"  @click="navigateToHome">Home Component</button>
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
