export default {
  CREATE_NEW_TAG({ commit }, payload) {
    console.log(payload)
    commit('CREATE_TAG', {name: payload.name, color: payload.color})
  }
}