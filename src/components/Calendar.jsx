import React, { useState } from 'react'

import '../styles.css'
import DatePicker from 'react-datepicker'
import ReactCalendar from 'react-calendar'
import 'react-datepicker/dist/react-datepicker.css'
import 'react-calendar/dist/Calendar.css'

const Calendar = () => {
  const [startDate, setStartDate] = useState(new Date())
  const [value, onChange] = useState(new Date())
  return (
    <div class='calendar'>
      <DatePicker
        selected={startDate}
        onChange={(date) => setStartDate(date)}
      />
      <ReactCalendar onChange={onChange} value={value} />
    </div>
  )
}
export default Calendar
