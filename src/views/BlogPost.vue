<template>
  <div class="box">
    <h3>{{ currentPost.user | capitalise }}</h3>
    <div class="inner">
      <p>{{ currentPost.body }}</p>
      <button @click="currentPost.likes++">Like</button>
    </div>
    This post has goten {{ currentPost.likes }} likes
  </div>
</template>

<script>
export default {
  name: 'BlogPost',
  props: ['currentPost'],
  filters: {
    capitalise: function (val) {
      if (!val) return
      const value = val.toString()
      return value.charAt(0).toUpperCase() + value.slice(1)
    }
  }
}
</script>

<style scoped>

.box {
  width: 500px;
  height: 200px;
  border: 1px solid black;
  padding: 0;
  margin: 0;
  display: inline-block;
}

</style>
