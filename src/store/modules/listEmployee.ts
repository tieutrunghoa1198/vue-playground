import type { DefaultCommit } from "@/store/IMutations";
import BaseAPI from "@/apis/axios";
import constants from "@/components/home/constants/constants";
import type {Student} from "@/components/home/types/student";

const state = () => ({

})

const ListState = {

}

const getters = {

}

const mutations = {

}

const actions = {
    getAll: async function ({ commit, state }: DefaultCommit, payload: Student) {
        const res = await BaseAPI.get(constants.apiUrl);
        if (res.status.toString() === constants.successCode) {
            console.log(res.data);
            return res.data;
        }
    }
}

export const List = {
    namespaced: true,
    state,
    getters,
    actions,
    mutations,
};
