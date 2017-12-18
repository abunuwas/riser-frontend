import v4 from 'uuid'

import { removePlacement, fetchPlacements, savePlacement } from './api'

export const createPlacement = ({ commit, state }, data) => {
  let id = v4()
  let placement = Object.assign({ id: id }, data)
  commit('CREATE_PLACEMENT', placement)
  savePlacement(placement).then((value) => {
    console.log('placement saved ' + value)
  }).catch((err) => {
    console.log('ERROR: ' + err)
  })
}

export const updatePlacement = ({ commit, state }, data) => {
  console.log('hehehehehehehehe')
  commit('UPDATE_PLACEMENT', { data })
}

export const loadPlacements = (state) => {
  if (!state.placements || Object.keys(state.placements).length === 0) {
    return fetchPlacements().then((res) => {
      state.commit('LOAD_PLACEMENTS', res)
    })
  }
}

export const deletePlacement = ({ commit }, data) => {
  commit('DELETE_PLACEMENT', data)
  removePlacement(data)
}
