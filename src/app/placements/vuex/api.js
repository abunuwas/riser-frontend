import axios from 'axios'
import moment from 'moment'

export const savePlacement = (placement) => {
  placement = Object.assign({}, placement)
  placement.start = placement.start.toJSON()
  placement.end = placement.end.toJSON()

  return axios.post('http://localhost:7000/api/placements', { placement })
    .then((res) => {
      return res.data
    }).catch((res) => {
      console.log('ERROR: ' + res.data)
    })
}

export const fetchPlacements = (user, token) => {
  return axios.get('http://localhost:7000/api/placements', { user, token })
    .then((res) => {
      let placements = res.data.placements
      Object.keys(placements).forEach((o) => {
        placements[o].start = new Date(moment(placements[o].start).format('YYYY-MM-DD'))
        placements[o].end = new Date(moment(placements[o].end).format('YYYY-MM-DD'))
      })
      console.log('fetching placements...')
      console.log(placements)
      console.log(placements[0])
      return placements
    })
}

export const removePlacement = (user, token) => {
  console.log('haha')
}
