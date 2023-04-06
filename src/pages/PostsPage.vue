<template>
  <div>
    <h1>Page with posts</h1>
    <my-input
        v-focus
        v-model="searchQuery"
        placeholder="Search posts..."
    />
    <div class="app_btns">
      <my-button
          @click="showDialog"

      >
        Create Post
      </my-button>
      <my-select
          v-model="selectedSort"
          :options="sortOptions"
      />
    </div>

    <my-dialog v-model:show="dialogVisible">
      <post-form
          @create="createPost"
      />
    </my-dialog>

    <post-list
        :posts="sortedAndSearchedPosts"
        @remove="removePost"
        v-if="!isPostsLoading"
    />
    <div v-else>Loading...</div>
    <div v-intersection="loadMorePosts" class="observer"></div>
    <!--    <post-pagination
            @updatePage="setPageNum"
            :totalPages="totalPages"
            :page-num="page"


        />-->
  </div>
</template>

<script>
import PostForm from "@/components/PostForm";
import PostList from "@/components/PostList";
import MyDialog from "@/components/UI/MyDialog";
import MyButton from "@/components/UI/MyButton";
import axios from 'axios';
import MySelect from "@/components/UI/MySelect";
import MyInput from "@/components/UI/MyInput";
//import PostPagination from "@/components/PostPagination";
export default {
   //name: "main-page",
  components: {
    //PostPagination,
    MyInput,
    MySelect,
    MyButton,
    MyDialog,
    PostList, PostForm
  },
  data() {
    return {
      posts: [

      ],
      dialogVisible:false,
      modificatorValue: '',
      isPostsLoading: false,
      selectedSort: '',
      searchQuery: '',
      currentPage: '1',
      page: 1,
      limit: '10',
      totalPages: 0,
      sortOptions: [
        { value: 'title', name: 'By Title' },
        { value: 'body', name: 'By Body' }
      ]

    }
  },
  methods: {
    createPost(post) {
      this.posts.push(post)
      this.dialogVisible = false;
    },
    removePost(post) {
      this.posts = this.posts.filter(p => p.id !== post.id)
    },
    showDialog() {
      this.dialogVisible = true;
    },

    /*setPageNum(page) {
      let pageNum
      if(page != undefined) {
        pageNum = page.page
        this.page = pageNum;
      }
      console.log(this.page)
      this.fetchPosts();
    },*/
    async fetchPosts() {
      try {
        this.isPostsLoading = true;

        const  response = await axios.get('https://jsonplaceholder.typicode.com/posts',{
          params: {
            _page: this.page,
            _limit: this.limit
          },

        });
        this.totalPages = Math.ceil(response.headers['x-total-count'] / this.limit);
        this.posts = response.data;
        this.isPostsLoading = false;




      } catch (e) {
        alert('Error')
      } finally {
        console.log('Posts Loaded!')
      }
    },
    async loadMorePosts() {
      try {
        this.page += 1;
        console.log(this.page)


        const  response = await axios.get('https://jsonplaceholder.typicode.com/posts',{
          params: {
            _page: this.page,
            _limit: this.limit
          },

        });
        this.totalPages = Math.ceil(response.headers['x-total-count'] / this.limit);
        this.posts = [...this.posts, ...response.data]





      } catch (e) {
        alert('Error')
      }
    },


  },
  mounted: function () {
    this.fetchPosts();

    /**
     *Lazy load posts
     */
        //console.log(this.$refs.observer);
    /*const options = {

          rootMargin: '0px',
          threshold: 1.0
        }
    const callback = (entries) => {
      if(entries[0].isIntersecting && this.page < this.totalPages) {
        this.loadMorePosts()
        console.log('NEED TO LOAD')
      }
      /!*console.log('NEED TO LOAD')
      console.log(entries)*!/

    };
    const observer = new IntersectionObserver(callback, options);
    observer.observe(this.$refs.observer)*/
    /**
     *End Lazy load posts
     */
  },
  computed: {
    sortedPosts(){
      return[...this.posts].sort((post1, post2) => {
        return post1[this.selectedSort]?.localeCompare(post2[this.selectedSort]);
      })
    },
    sortedAndSearchedPosts() {
      return this.sortedPosts.filter(post=>post.title.toLowerCase().includes(this.searchQuery.toLocaleLowerCase()))
    }

  },
  watch: {

    /*page() {
      this.fetchPosts()
    }*/
  }
}
</script>

<style>

.app_btns {
  display: flex;
  justify-content: space-between;
  margin: 15px 0;
  width: 75%;
}
.observer {
  height: 30px;
  background: green;
}

</style>
