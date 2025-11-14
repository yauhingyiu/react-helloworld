import React, { useState } from 'react';
import DateRangePicker from 'react-bootstrap-daterangepicker';
import 'bootstrap-daterangepicker/daterangepicker.css'; // Import CSS
import moment from 'moment';
import {DATE_FORMAT_YYYYMMDD} from '../services/ApiServices';
import {DATE_FORMAT_YYYYMMDD_HHMM} from '../services/ApiServices';

function MyDateRangePicker(props) {
  //console.log('props', props);
  
  const isSingleDatePicker = props.singleDatePicker || false;
  const isTimePicker = props.timePicker || false;
  
  const CURRENT_DATE_FORMAT = isTimePicker? DATE_FORMAT_YYYYMMDD_HHMM : DATE_FORMAT_YYYYMMDD;
  const [startDate, setStartDate] = useState( props.startDate ?? moment().format(CURRENT_DATE_FORMAT) );
  const [endDate, setEndDate] = useState( props.endDate ?? moment().format(CURRENT_DATE_FORMAT) );

  const handleApply = (event, picker) => {
    setStartDate(picker.startDate.format(CURRENT_DATE_FORMAT));
    setEndDate(picker.endDate.format(CURRENT_DATE_FORMAT));
    if(props.setStartDate)
    {
      props.setStartDate(picker.startDate.format(CURRENT_DATE_FORMAT));
    }
    if(props.setEndDate)
    {
      props.setEndDate(picker.endDate.format(CURRENT_DATE_FORMAT));
    }
  };
  
  

  return (
    <DateRangePicker
      initialSettings={{
        singleDatePicker: isSingleDatePicker,
        timePicker: isTimePicker,
        showDropdowns: true,
        startDate: {startDate},
        endDate: {endDate},
        //minYear: 2000,
        //maxYear: parseInt(moment().format('YYYY'), 10),
        minDate: moment(props.minDate ?? '2000-01-01'),
        maxDate: moment(props.maxDate),
        locale:{
          format: CURRENT_DATE_FORMAT, // Set the desired date format here
          separator: ' to '
        }
      }}
      startDate={startDate}
      endDate={endDate}
      onApply={handleApply}
    >
      <div>
        <input type="text" className="form-control" value={isSingleDatePicker? startDate:startDate + ' to ' + endDate} readOnly />
      </div>
    </DateRangePicker>
  );
}

export default MyDateRangePicker;