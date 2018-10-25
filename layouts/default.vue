<template>
  <div>
    <main-nav/>

    <div class="container">
      <nuxt/>
    </div>

    <footer-bar/>
  </div>
</template>

<script>
export default {
  props:['content']
}
</script>

