<template>
   <div class="container mt-4">
    <h2 class="mb-4 text-center">📚 도서 상세 정보</h2>
    <table class="table table-bordered table-hover book-info-table">
      <tbody>
        <tr>
          <th>순번</th>
          <td>{{ bookInfo.bookid }}</td>
          <th>ISBN</th>
          <td colspan="3">{{ bookInfo.ISBN}}</td>
        </tr>
        <tr>
          <th>저자</th>
          <td>{{ bookInfo.writer }}</td>
          <th>출판사</th>
          <td>{{ bookInfo.company }}</td>
          <th>가격</th>
          <td>{{ bookInfo.price }}원</td>
        </tr>
        <tr>
          <th>책 제목</th>
          <td colspan="5">{{ bookInfo.bookname }}</td>
        </tr>
        <tr>
          <th>내용</th>
          <td colspan="5">
            <pre class="book-content">{{ bookInfo.content }}</pre>
          </td>
        </tr>
      </tbody>
    </table>
  </div>

</template>
<script setup>
  import { ref, onMounted } from 'vue';
  import { useRoute, useRouter } from 'vue-router';
  import axios from 'axios';

  const bookInfo = ref({});
  const route = useRoute();
  const router = useRouter();
  const searchNo = route.query.id;

  const getBookInfo = async () => {
    const response = await axios.get(`/api/book/${searchNo}`);
    bookInfo.value = response.data[0];
  };

  getBookInfo();
</script>
<style scoped>
.book-info-table th {
  background-color: #f0f8ff;
  text-align: center;
  vertical-align: middle;
  width: 120px;
}

.book-info-table td {
  vertical-align: middle;
}

.book-content {
  white-space: pre-wrap;
  border: none;
  background-color: #fff;
  padding: 1rem;
  margin: 0;
  font-family: 'Noto Sans KR', sans-serif;
  font-size: 1rem;
  line-height: 1.5;
}

h2 {
  font-weight: bold;
  color: #333;
}
</style>