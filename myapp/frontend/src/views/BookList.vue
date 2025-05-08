<template>
  <div class="container">
    <table class="table table-hover">
      <thead>
        <tr>
          <th>순번</th>
          <th>책 제목</th>
          <th>내용</th>
          <th>저자</th>
          <th>출판사</th>
          <th>가격</th>
          <th>ISBN</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(book, idx) in bookList" :key="book.bookid" @click="goToDetail(book.bookid)">
          <td>{{ book.bookid }}</td>
          <td>{{ book.bookname }}</td>
          <td>{{ book.bookinfo }}</td>
          <td>{{ book.writer }}</td>
          <td>{{ book.company }}</td>
          <td>{{ book.price }}</td>
          <td>{{ book.ISBN }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup>
  import axios from "axios";
  import {ref} from "vue";
  import {useRouter, useRoute} from "vue-router";

  const router = useRouter();
  const route = useRoute();
  const bookList = ref([])

  const getBookList = async() =>{
    let result = await axios.get(`/api/book`);
    bookList.value = result.data;
  }

  const goToDetail = async(id) =>{
    router.push({ path: "/bookInfo", query: { id: bookid } });
  }

  getBookList();
  goToDetail();
</script>
<style scoped>
table * {
  text-align: center;
}
</style>