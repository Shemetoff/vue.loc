<template>
  <form @submit.prevent>
    <h4>Create Post</h4>
    <my-input
        v-focus
        v-model="post.title"
        type="text"
        placeholder="Name"
    />
    <my-input
        v-model="post.body"
        type="text"
        placeholder="Body"
    />
    <my-button
        class="btn"
        style="align-self: flex-end"
        @click="createPost"

    >
      Create Post
    </my-button>
  </form>
</template>

<script>
import MyButton from "@/components/UI/MyButton";

export default {
//name: "PostForm"
  components: {
    MyButton
  },
  data() {
    return {
      post: {
        title: '',
        body: '',
      }
    }
  },
  methods: {
    createPost() {
      this.post.id = Date.now();
      this.$emit('create', this.post, 'second param', '3 param')
      this.post = {
        title: '',
        body: ''
      }
      this.title = '';
      this.body = '';
    }
  },

}
</script>

<style scoped>
  form {
    display: flex;
    flex-direction: column;
  }


</style>
