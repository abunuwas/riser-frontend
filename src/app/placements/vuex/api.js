import axios from 'axios'
import moment from 'moment'

export const savePlacement = (placement) => {
  placement = Object.assign({}, placement)
  console.log(placement)
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
      Object.keys(placements).forEach((index) => {
        placements[index].start = new Date(
          moment(placements[index].start).format('YYYY-MM-DD'))
        placements[index].end = new Date(
          moment(placements[index].end).format('YYYY-MM-DD'))
      })
      console.log(placements)
      return placements
    })
}

export const removePlacement = (placement) => {
  console.log(placement.id)
  return axios.delete('http://localhost:7000/api/placements/' + placement.id)
    .then((res) => {
      console.log(res)
      return true
    }).catch((err) => {
      console.log(err)
      return false
    })
}
