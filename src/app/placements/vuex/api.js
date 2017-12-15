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
  return axios.get('http://localhost:7000/api/placements', { user, token })
    .then((res) => {
      console.log('fetching placements...')
      console.log(res)
      console.log(res.data)
      console.log(res.data.placements[0])
      return res.data.placements
    })
}

export const removePlacement = (user, token) => {
  console.log('haha')
}
