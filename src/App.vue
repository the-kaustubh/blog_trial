<template>
  <div id='app'>
    <BlogPost :currentPost="posts[currntPostId]"/>
    <OtherPosts :AllPosts="posts" @gotopost="goToPost($event)"/>
  </div>
</template>

<script>

import BlogPost from './components/BlogPost.vue'
import OtherPosts from './components/OtherPosts.vue'

export default {
  name: 'App',
  components: {
    BlogPost,
    OtherPosts
  },
  activated () {
    alert('hello')
  },
  methods: {
    goToPost (postID) {
      this.currntPostId = postID
    }
  },
  data () {
    return {
      currntPostId: 0,
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
