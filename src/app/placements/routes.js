import * as components from './components'

export default [
  {
    path: '/placements',
    component: components.ListPlacements,
    name: 'listPlacements'
  },
  {
    path: '/placements/create',
    component: components.CreateUpdatePlacements,
    name: 'createUpdatePlacements'
  }
]
