<template>
  <div class="container">
    <h3>User Detail Component</h3>
    <hr>
    <p>Kullanıcının ID Bilgisi : {{$route.params.id}}</p>
    <router-link
    tag="button"
    class="btn btn-primary"
    :to="{name:'userEdit',params:{id:$route.params.id}}"
    >
    <!-- :to="'/user/'+$route.params.id+'/edit'" -->
    <!-- BU ŞEKİLDE DE TANIMLANABİLİR -->
    Kullanıcıyı Düzenle
    </router-link>
  </div>
</template>
<script>
  export default {}
</script>
