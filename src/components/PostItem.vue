<template>
  <div class="post">
    <div>
      <div><strong>Title: </strong> {{ post.title }}</div>
      <div><strong>Description: </strong> {{ post.body }}</div>
    </div>
    <div class="post__btns">
      <my-button @click="deletePost" class="btn">Delete</my-button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    post: {
      type: Object,
      required: true,
    },
  },
  methods: {
      deletePost() {
        //   debugger
          this.$emit('delete', this.post)
      }
  }
 
};
</script>

<style scoped>
.post {
  padding: 15px;
  border: 2px solid #000;
  margin-top: 15px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
</style>