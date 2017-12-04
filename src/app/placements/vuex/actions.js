export const createPlacement = ({ commit }, data) => {
  commit('CREATE_PLACEMENT', { data: data })
}
