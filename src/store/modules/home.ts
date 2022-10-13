import type { Student } from "@/components/home/types/student";
import { IMutations } from "@/store/IMutations";
import BaseAPI from "@/apis/axios";
const state = () => ({
  id: '',
  isCreated: false
});

const getters = {
  getStudentId: (state: any) => state.id,
};

const actions = {
  createStudent: async function (
    { commit, state }: { commit: any; state: any },
    payload: Student
  ) {
    const res = await BaseAPI.post("/api/employees", payload);
    if (res.status.toString() === '200') {
      return res.data;
    }
  },
};

const mutations = {
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
