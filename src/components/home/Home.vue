<template>
  <main class="container mb-5">
    <section class="title">
      <h1 class="text-capitalize">{{ title }}</h1>
    </section>
    <div class="content">
      <form >
        <div class="row mb-3">
          <div class="name-title col-2">
            {{ constants.title.fullName }}
          </div>
          <div class="name-input col-4">
            <input class="input-group" v-model="fullName"/>
          </div>
        </div>

        <div class="row mb-3">
          <div class="name-title col-2">
            {{ constants.title.age }}
          </div>
          <div class="name-input col-4">
            <input class="input-group" v-model="age"/>
          </div>
        </div>

        <div class="row mb-3">
          <div class="name-title col-2">
            {{ constants.title.gender }}
          </div>
          <div class="name-input col-4 d-flex" style="padding: 0">
            <div class="mx-2">
              <input type="radio" id="one" :value="constants.title.male" v-model="gender" />
              <label class="mr-2" for="one">{{ constants.title.male }}</label>
            </div>

            <div class="mx-2">
              <input type="radio" id="two" :value="constants.title.female" v-model="gender" />
              <label for="two">{{ constants.title.female }}</label>
            </div>
          </div>
        </div>

        <button class="btn btn-primary" @click.prevent="test">Click</button>
      </form>
    </div>
  </main>
</template>

<script setup lang="ts">
import {ref} from "vue";
import constants from "@/components/home/constants/constants";
import type {Student} from "@/components/home/types/student";
import {useStore} from "vuex";

const title = 'create employee'
const gender = ref('');
const fullName = ref('');
const age = ref('');
const store = useStore();

async function test() {
  const student: Student = {
    fullname: fullName.value,
    age: age.value,
    gender: (gender.value === 'male') ? true : false ,
  }

  const res = await store.dispatch('HomeStore/createStudent', student);
  console.log(res, 'here in vue');
}
</script>
