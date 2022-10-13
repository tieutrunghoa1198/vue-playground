import type { Student } from "@/components/home/types/student";
import { IMutations } from "@/store/IMutations";
import BaseAPI from "@/apis/axios";
import constants from "@/components/home/constants/constants";
const state = () => ({
  id: '',
  isCreated: false
});
const StorePath = {
  id: "HomeStore/id",
  isCreated: "HomeStore/isCreated"
}
const getters = {
  getStudentId: (state: any) => state[StorePath.id],
};

const actions = {
  createStudent: async function (
    { commit, state }: { commit: any; state: any }, payload: Student) {
    const res = await BaseAPI.post(constants.apiUrl, payload);
    if (res.status.toString() === constants.successCode) {
      commit(IMutations.returned_employee, res);
      return res.data;
    } else return constants.apiFail;
  },
};

const mutations = {
  [IMutations.returned_employee](state: any, payload: any) {
    state[StorePath.id] = payload.data;
    state[StorePath.isCreated] = true;
  }
};

export const HomeStore = {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
