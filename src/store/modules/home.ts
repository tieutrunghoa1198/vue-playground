import type { Student } from "@/components/home/types/student";
import { IMutations } from "@/store/IMutations";
import BaseAPI from "@/apis/axios";
const state = () => ({
  id: '',
  student: {
    fullname: "",
    age: "",
    gender: false,
  } as Student,
  listStudent: [] as Student[],
});

const getters = {
  getStudentId: (state: any) => state.id,
};

const actions = {
  createStudent: async function (
    { commit, state }: { commit: any; state: any },
    payload: Student
  ) {
    await BaseAPI.post("/api/employees", payload).then(async (res) => {
      console.log(res);
      if (res) {
        await commit(IMutations.returned_employee, {id: res.data});
      }
    });
  },
};

const mutations = {
  [IMutations.set_employee](state: any, payload: Student) {
    console.log("run mutations employee");
    state.student.fullname = payload.fullname;
    state.student.age = payload.age;
    state.student.gender = payload.gender;
  },
  [IMutations.returned_employee](state: any, payload: any) {
    console.log(payload.id, 'id ra day')
    state.student.id = payload.id;
  }
};

export const HomeStore = {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
