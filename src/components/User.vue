<template>
  <div class="container">
    <h3>User Component</h3>
    <hr>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis, earum libero odit optio repellendus sed
      soluta? Animi, atque blanditiis commodi consequatur distinctio dolorem eaque eos expedita, modi reprehenderit
      repudiandae soluta.
    </p>
    <hr>
    <button class="btn btn-seccess"  @click="navigateToHome">Home Component</button>
  </div>
</template>
<script>
  export default {
    methods:{
      navigateToHome(){
        this.$router.push("/") // 1.yol  sadece path verilir. 
        // this.$router.push({path:"/"}) // 2. yol obje nin içinde path verilir.
        this.$router.push()
      }
    }
  }
</script>
