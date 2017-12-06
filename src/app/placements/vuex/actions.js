import moment from 'moment'
import v4 from 'uuid'

import { savePlacement, fetchPlacements, deletePlacement } from './api'

export const createPlacement = ({ commit, state }, data) => {
  let id = v4()
  let placement = Object.assign({ id: id }, data)
  commit('CREATE_PLACEMENT', { placement: placement })
  savePlacement(placement).then((value) => {
    console.log('placement saved ' + value)
  }).catch((err) => {
    console.log('ERROR: ' + err)
  })
}
