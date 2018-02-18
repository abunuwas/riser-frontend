import axios from 'axios'
import moment from 'moment'

const SERVER_URL = process.env.SERVER_URL

export const saveTimesheet = (timesheet) => {
  timesheet = Object.assign({}, timesheet)
  console.log('THE TIMESHEET ---' + timesheet)
  timesheet.start = timesheet.start.toJSON()
  timesheet.end = timesheet.end.toJSON()
  console.log('TIMESHEET start: ' + timesheet.start)
  let idURL = timesheet.id.split('-')[1]
  let url = `http://${SERVER_URL}/2/2/${idURL}/riserts.fcgi`
  return axios.post(
    url,
    { 'timesheet': timesheet }
    )
    .then((res) => {
      console.log('RESPONSE FROM SERVER: ' + res)
      return res.data
    }).catch((res) => {
      console.log('ERROR: ' + res)
    })
}

export const fetchTimesheets = (user, token) => {
  return axios.get(`http://${SERVER_URL}/2/2/riserts.fcgi`, { user, token })
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
