import * as components from './components'

export default [
  {
    path: '/timesheets',
    component: components.ListTimesheets,
    name: 'listTimesheets'
  },
  {
    path: '/timesheets/create',
    component: components.CreateUpdateTimesheets,
    name: 'createUpdateTimesheet'
  }
]
