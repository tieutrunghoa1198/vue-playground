<script setup lang="ts">
import {useStore} from "vuex";
import constants from "@/components/home/constants/constants";
import type {Student} from "@/components/home/types/student";
import {ref} from "vue";

const store = useStore();
let students = ref([]);
async function clickHere() {
  const res = await store.dispatch("List/getAll");
  console.log(res)
  students.value = res;
}
// const listEmployees = await store.dispatch("List/getAll");
// console.log(listEmployees);
</script>
<template>
  <main class="container d-flex justify-content-center">
    <div class="col-8 py-5">
      <button class="btn btn-primary" @click="clickHere">click</button>
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
            <button class="btn btn-primary mx-2">Edit</button>
            <button class="btn btn-outline-danger mx-2">Delete</button>
          </td>
        </tr>

        </tbody>
      </table>
    </div>
  </main>
</template>


