import React, { useState } from 'react';
import DateRangePicker from 'react-bootstrap-daterangepicker';
import 'bootstrap-daterangepicker/daterangepicker.css'; // Import CSS
import moment from 'moment';
import {DATE_FORMAT_YYYYMMDD} from '../services/ApiServices';

function MyDatePicker() {
  //const DATE_FORMAT_YYYYMMDD = process.env.REACT_APP_DATE_FORMAT_YYYYMMDD;
  const [startDate, setStartDate] = useState(moment().format(DATE_FORMAT_YYYYMMDD));
  const [endDate, setEndDate] = useState(moment().format(DATE_FORMAT_YYYYMMDD));

  const handleApply = (event, picker) => {
    setStartDate(picker.startDate.format(DATE_FORMAT_YYYYMMDD));
    //setEndDate(picker.endDate.format(DATE_FORMAT_YYYYMMDD));
  };

  return (
    <DateRangePicker
      locale={{
        format: DATE_FORMAT_YYYYMMDD // Set the desired date format here
      }}
      initialSettings={{
        singleDatePicker: true,
        showDropdowns: true,
        startDate: {startDate},
        minYear: 2000,
        maxYear: parseInt(moment().format('YYYY'), 10),
      }}
      startDate={startDate}
      onApply={handleApply}
    >
      <div>
        <input type="text" className="form-control" value={startDate} readOnly />
      </div>
    </DateRangePicker>
  );
}

export default MyDatePicker;