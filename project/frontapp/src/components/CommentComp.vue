<template>
  <p>댓글리스트</p>

  댓글등록폼 작성자 내용
</template>
<script>
import axios from "axios";

export default{
  props: ["bid"],
  data(){
    return{
      searchNo: "",
      comment: [],
    };
  },
  methods: {

      getComment(){
      let comment = axios.get(`/api/comment/1`);  //${this.bid}
      this.comment = comment.data;
      },
    },
    mounted(){
      //this.getComment();
    },
  };
</script>
<style>

</style>