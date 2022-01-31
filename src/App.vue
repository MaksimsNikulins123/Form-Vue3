<template>
  <div class="app">
      <post-form 
      @create="createPost"  
      />
      <post-list 
      :posts="posts"
      @delete="deletePost"
      />
  </div>
</template>

<script>
import PostForm from "@/components/PostForm";
import PostList from "@/components/PostList";

export default {
  components: {
    PostList,
    PostForm,
  },
  data: function () {
    return {
      posts: [
        {
          id: 1,
          title: "JS 1",
          body: "Post description 1",
        },
        {
          id: 2,
          title: "JS 2",
          body: "Post description 2",
        },
        {
          id: 3,
          title: "JS 3",
          body: "Post description 3",
        },
      ],
    };
  },
  methods: {
     
    createPost(post) {
        //  debugger
        this.posts.push(post);
    },
    deletePost(post) {
        // debugger
        // const post1 = post;
        this.posts = this.posts.filter(p => p.id !== post.id)
    }
  },
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.app {
  padding: 20px;
}
</style>