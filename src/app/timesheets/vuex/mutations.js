import Vue from 'vue'

export default {
  CREATE_TIMESHEET (state, placement) {
    state.timesheets[placement.id] = placement
  },

  UPDATE_TIMESHEET (state, payload) {
    state.timesheets[payload.timesheet.id] = payload.timesheet
  },

  LOAD_TIMESHEETS (state, payload) {
    state.timesheets = payload
  },

  DELETE_TIMESHEET (state, timesheet) {
    let index = state.timesheets.indexOf(timesheet)
    Vue.delete(state.timesheets, index)
  }
}
