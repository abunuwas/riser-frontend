import * as components from './components'

export default [
  {
    path: '/timesheets',
    component: components.ListTimesheets,
    name: 'listTimesheets'
  },
  {
    path: '/timesheets/:timesheetId',
    component: components.CreateUpdateTimesheets,
    name: 'updateTimesheet'
  }
]
