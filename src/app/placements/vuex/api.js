import axios from 'axios'

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
  return axios.get('/api/placements', { user, token }).then((res) => {
    let placements = {}
    Object.keys(res).forEach((o) => {
      placements[o].start = new Date(placements[o].start)
      placements[o].end = new Date(placements[o].end)
    })
    return placements
  })
}

export const deletePlacement = (user, token) => {
  console.log('haha')
}
