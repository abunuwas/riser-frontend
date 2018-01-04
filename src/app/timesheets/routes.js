import * as components from './components'

export default [
  {
    path: '/timesheets',
    component: components.ListTimesheets,
    name: 'listTimesheets'
  },
  {
    path: '/timesheets/update',
    component: components.CreateUpdateTimesheets,
    name: 'createUpdateTimesheet'
  }
]
