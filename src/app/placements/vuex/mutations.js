import Vue from 'vue'

export default {
  CREATE_PLACEMENT (state, payload) {
    state.placements[payload.placement.id] = payload.placement
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
