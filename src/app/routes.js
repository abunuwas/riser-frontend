import { routes as dashboard } from './dashboard'
import { routes as placements } from './placements'
import { routes as timesheets } from './timesheets'

export default [ ...timesheets, ...placements, ...dashboard ]
