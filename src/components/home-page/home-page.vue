<script setup lang="ts">
import {onMounted, ref, watch} from "vue";
import {HomePageController} from "@/components/home-page/HomePageController";
defineProps({
  title: String,
  likes: Number
})

let name = ref('');
const gender = ref(false);

const onChange = (event: any) => {
}

const onSubmit = (event: any) => {
  HomePageController.onSubmit(name, gender);
}

onMounted(() => {
  HomePageController.mounted(name, gender);
})
</script>


<template>
  <div class="container scrollDiv">
    <div class="d-flex row">
      <form
          @change="onChange($event)"
          @submit.prevent="onSubmit($event)">
        <h2>{{title}}</h2>
        <div class="name row my-2">
          <div>Name: </div>
          <div class="col-3 input-group">
            <input type="text" v-model="name">
          </div>
        </div>

        <div class="name row my-2">
          <div>Gender:</div>
          <div class="col-3 input-group">
            <input type="checkbox" v-model="gender">
          </div>
        </div>

        <div class="row my-2">
          <div class="col-2">
            <button type="submit" class="btn btn-primary">Submit</button>
          </div>
        </div>

      </form>
    </div>
  </div>
</template>
