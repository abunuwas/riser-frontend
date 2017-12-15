import momentjs from 'moment'

export const moment = (date, format) => {
  format = format || 'DD MMM YYYY'
  return momentjs(date).format(format)
}
