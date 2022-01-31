<template>
  <div>
    <h3>Users List</h3>
    <post-item 
    v-for="post in posts" 
    :key="post.id"
    :post="post"
    @delete="deletePost"
     />
  </div>
</template>

<script>
import PostItem from "@/components/PostItem";
export default {
  components: {PostItem},
  props: {
    posts: {
      type: Array,
      required: true,
    },
  },
   methods: {
      deletePost(post) {
        //   debugger
          this.$emit('delete', post)
      }
  }
};
</script>

<style>

</style>