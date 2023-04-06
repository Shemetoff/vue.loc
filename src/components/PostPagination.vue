<template>
  <div class="page__wrapper">
    <div

        v-for="pageNumber in totalPages"
        :key="pageNumber"

        class="page"

        :class="{
            'current-page':  pageNum == pageNumber
          }"
        @click="changePage(pageNumber)"
    >
      {{ pageNumber }}
    </div>
  </div>
</template>

<script>
export default {
  name: "post-pagination",
  props: {
    pageNum: {
      type: Number,
      required: true
    },
    totalPages: {
      type: Number,
      required: true
    },
  },
  data() {
    return {
      page: 1
    }
  },
  methods: {
    changePage(pageNumber) {
      //console.log('click' + pageNumber);
      //this.$emit('create', this.post, 'second param', '3 param')
     // this.$emit('update',this.currentPage);
      //this.currentPage = pageNumber

      this.$emit('updatePage',{
        page: pageNumber

      });

    },
  },

}
</script>

<style scoped>
  .page__wrapper {
    display: flex;
    gap: 10px;
    margin-top: 15px;
  }
  .page {
    border: 1px solid #000;
    padding: 10px;
  }
  .current-page {
    border: 2px solid teal;
  }
</style>
