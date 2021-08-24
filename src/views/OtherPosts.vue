<template>
  <div class="box">
    <ol >
      <li v-for="post in AllPosts" v-bind:key="post.id" @click="$emit('gotopost', post.id)">
        See {{ post.user | capitalise }}'s post
      </li>
    </ol>
  </div>
</template>

<script>
export default {
  name: 'OtherPosts',
  props: ['AllPosts'],
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
  height: 500px;
  padding: 10px;
  margin: auto;
}

li {
  text-align: justify;
  cursor: pointer;
}

</style>
