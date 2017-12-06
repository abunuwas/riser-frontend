export default {
  CREATE_PLACEMENT (state, payload) {
    state.placements[payload.placement.id] = payload.placement
  }
}
