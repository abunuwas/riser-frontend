import axios from 'axios'
import moment from 'moment'

export const saveTimesheet = (timesheet) => {
  timesheet = Object.assign({}, timesheet)
  console.log(timesheet)
  timesheet.start = timesheet.start.toJSON()
  timesheet.end = timesheet.end.toJSON()

  return axios.post('http://localhost:7000/api/timesheets', { timesheet: timesheet })
    .then((res) => {
      return res.data
    }).catch((res) => {
      console.log('ERROR: ' + res.data)
    })
}

export const fetchTimesheets = (user, token) => {
  console.log('We are about to fetch timesheets from server...')
  return axios.get('http://82.223.35.243/2/2/riserts.fcgi', { user, token })
    .then((res) => {
      let timesheets = res.data.timesheet
      Object.keys(timesheets).forEach((index) => {
        timesheets[index].start = new Date(
          moment(timesheets[index].start).format('YYYY-MM-DD'))
        timesheets[index].end = new Date(
          moment(timesheets[index].end).format('YYYY-MM-DD'))
      })
      console.log(timesheets)
      return timesheets
    })
}

export const removeTimesheet = (timesheet) => {
  console.log(timesheet.id)
  return axios.delete('http://localhost:7000/api/timesheets/' + timesheet.id)
    .then((res) => {
      console.log(res)
      return true
    }).catch((err) => {
      console.log(err)
      return false
    })
}
