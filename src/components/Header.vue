<template>
<ul class="nav nav-pills">
    <router-link tag="li" to="/" exact active-class="active">
        <a>Home</a>
    </router-link>
    <router-link tag="li" to="/user/1" exact active-class="active">
        <a>User 1</a>
    </router-link>
    <router-link tag="li" to="/user/2" exact active-class="active">
        <a>User 2</a>
    </router-link>
</ul>
</template>

<script>
export default {

}
</script>

<style>

</style>