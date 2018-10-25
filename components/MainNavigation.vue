<template>
    <b-nav-bar toggleable="md" type="dark" variant="info">
        <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>
        <b-navbar-brand href="#">NavBar</b-navbar-brand>
        <b-collapse is-nav id="nav_collapse">
        <b-navbar-nav>
          <nuxt-link to="/">Home</nuxt-link>
          <nuxt-link to="/news/">News</nuxt-link>
          <nuxt-link to="/news/test-news-item">News Article</nuxt-link>
        </b-navbar-nav>
      </b-collapse>
    </b-nav-bar>
</template>

<script>
export default {
  props:['content']
}
</script>

<style>

</style>