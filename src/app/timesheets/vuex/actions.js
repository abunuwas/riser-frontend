import v4 from 'uuid'

import { removeTimesheet, fetchTimesheets, saveTimesheet } from './api'

export const createTimesheet = ({ commit, state }, data) => {
  let id = v4()
  let timesheet = Object.assign({ id: id }, data)
  commit('CREATE_TIMESHEET', timesheet)
  saveTimesheet(timesheet).then((value) => {
    console.log('timesheet saved ' + value)
  }).catch((err) => {
    console.log('ERROR: ' + err)
  })
}

export const updateTimesheet = ({ commit, state }, data) => {
  console.log('Commit: ' + commit)
  console.log('State: ' + state.id)
  console.log('Timesheet updated ' + data.id)
  commit('UPDATE_TIMESHEET', data)
  console.log('AFTER VUE UPDATE')
  saveTimesheet(data).then((value) => {
    console.log('timesheet saved ' + value)
  }).catch((err) => {
    console.log('ERROR: ' + err)
  })
}

export const loadTimesheets = (state) => {
  console.log('Trying to load timesheets....')
  if (!state.timesheets || Object.keys(state.timesheets).length === 0) {
    return fetchTimesheets().then((res) => {
      state.commit('LOAD_TIMESHEETS', res)
    })
  }
}

export const deleteTimesheet = ({ commit }, data) => {
  commit('DELETE_TIMESHEET', data)
  removeTimesheet(data)
}
