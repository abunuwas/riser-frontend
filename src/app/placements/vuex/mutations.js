import v4 from 'uuid'

export default {
  CREATE_PLACEMENT (state, { data }) {
    let id = v4()
    state.placements[id] = Object.assign({ id: id }, data.placement)
  }
}
