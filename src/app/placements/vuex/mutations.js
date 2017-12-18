import Vue from 'vue'

export default {
  CREATE_PLACEMENT (state, placement) {
    console.log('CREATE_PLACEMENT')
    console.log(placement)
    state.placements[placement.id] = placement
  },

  UPDATE_PLACEMENT (state, payload) {
    state.placements[payload.placement.id] = payload.placement
  },

  LOAD_PLACEMENTS (state, payload) {
    state.placements = payload
  },

  DELETE_PLACEMENT (state, placement) {
    let index = state.placements.indexOf(placement)
    Vue.delete(state.placements, index)
  }
}
