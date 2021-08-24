<template>
  <div id='app'>
    <div class="routes">
      <li>
        <router-link to="/">Home</router-link>
      </li>
      <li>
      <router-link to="/feed">Feed</router-link>
      </li>
    </div>
    <router-view :currentPost="posts[currntPostId]" :AllPosts="posts" @gotopost="goToPost($event)"></router-view>
  </div>
</template>

<script>

// import BlogPost from './components/BlogPost.vue'
// import OtherPosts from './components/OtherPosts.vue'

export default {
  name: 'App',
  methods: {
    goToPost (postID) {
      this.currntPostId = postID
      this.$router.push({ name: 'BlogPost' })
    }
  },
  data () {
    return {
      currntPostId: this.$route.params.id || 0,
      posts: [
        {
          id: '0',
          body: 'This is my first blog post',
          user: 'kaustubh',
          likes: 0
        },
        {
          id: '1',
          body: 'This is my second blog post',
          user: 'kaustubh',
          likes: 0
        },
        {
          id: '2',
          body: 'This is Vedant\'s first blog post',
          user: 'vedant',
          likes: 0
        },
        {
          id: '3',
          body: 'This is Rajiv\'s first blog post',
          user: 'rajiv',
          likes: 0
        }
      ]
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
