<template>
  <div class="post" >
    <div>
      <div>{{post.id}}</div>
      <div><strong>Name:</strong> {{post.title}}</div>
      <div><strong>Description:</strong> {{post.body}}</div>
    </div>
    <div class="post__btns">
      <my-button
        @click="$router.push(`/posts/${post.id}`)"
      >
        View
      </my-button>
      <my-button
          @click="$emit('remove',post)"
      >
        Delete
      </my-button>

    </div>
  </div>

</template>

<script>

import MyButton from "@/components/UI/MyButton";
export default {
  components: {MyButton},
//name: "PostItem"
  props: {
    post: {
      type: Object,
      required: true,
    }
  }
}
</script>

<style scoped>
  .post {
    padding: 15px;
    border: 2px solid green;
    margin:15px;
    width: 75%;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .post__btns {
    display: flex;
  }
</style>
