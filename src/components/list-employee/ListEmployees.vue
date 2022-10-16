<script setup lang="ts">
import {useStore} from "vuex";
import {onMounted, ref} from "vue";
import {useRoute, useRouter} from "vue-router";

let router: any;
const store = useStore();
let students = ref([]);

onMounted(async () => {
  const res = await store.dispatch("List/getAll");
  console.log(res)
  students.value = res;
})

function editEmployee(id: any, event: any) {
  console.log(router);
  router.push(`/employee/${id}`);
}

onMounted(async () => {
  router = useRouter();
})
</script>
<template>
  <main class="container d-flex justify-content-center">
    <div class="col-8 py-5">
      <h1>Employee Table</h1>
      <table class="table">
        <caption>List of users</caption>
        <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">First</th>
          <th scope="col">Last</th>
          <th scope="col">Handle</th>
          <th scope="col" class="text-center">Action</th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="(item, index) in students"
            :key="item.id">
          <th scope="row">{{ index + 1 }}</th>
          <td>{{ item.fullname }}</td>
          <td>{{ item.age }}</td>
          <td>{{ item.gender }}</td>
          <td class="text-center">
            <button
                class="btn btn-primary mx-2"
                @click="editEmployee(item._id, $event)">Edit</button>
            <button class="btn btn-outline-danger mx-2">Delete</button>
          </td>
        </tr>

        </tbody>
      </table>
    </div>
  </main>
</template>


