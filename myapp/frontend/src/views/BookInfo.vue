<template>
  <div class ="container">
    <div class="row">
      <table class="table table-bordered">
        <thead>
          <tr>
            <th scope="col" class="text-center table-primary">순번</th>
            <td scope="col" class="text-center">{{ bookInfo.bookid }}</td>
            <th scope="col" class="text-center table-primary">책 제목</th>
            <td scope="col" class="text-center">{{ bookInfo.bookname }}</td>
            <th scope="col" class="text-center table-primary">저자</th>
            <td scope="col" class="text-center">{{ bookInfo.writer }}</td>
            <th scope="col" class="text-center table-primary">출판사</th>
            <td scope="col" class="text-center">{{ bookInfo.company }}</td>
            <th scope="col" class="text-center table-primary">가격</th>
            <td scope="col" class="text-center">{{ bookInfo.price }}</td>
            <th scope="col" class="text-center table-primary">ISBN</th>
            <td scope="col" class="text-center">{{ bookInfo.ISBN }}</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td colspan="6" class="text-left" valign="top" height="200">
              <pre
                style="white-space: pre-wrap; border: none; background-color: white;">
                {{ bookInfo.content }}
              </pre>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>

</template>
<script setup>
  import { ref, onMounted } from 'vue';
  import { useRoute, useRouter } from 'vue-router';
  import axios from 'axios';

  const bookInfo = ref({});
  const route = useRoute();
  const router = useRouter();
  const searchNo = route.query.bookid;

  const getBookInfo = async () => {
    const response = awiat axios.get(`/api/board/${searchNo}`);
    bookInfo.value = response.data[0];
  };
</script>
<style></style>