import React, { Component } from 'react'
import 'react-dates/initialize';
import { SingleDatePicker } from 'react-dates';
import moment from "moment"

export default class DatePicker extends Component {
  
  constructor(props) {
    super();
    // 라이브러리에서 필요한 date는 moment 객체 date
    this.state = {
      focused: false,
      date: moment(new Date(props.date))
    }
    this.onDateChange = this.onDateChange.bind(this);
    this.onFocusChange = this.onFocusChange.bind(this);
  }

  onDateChange(date) {
    this.setState({ date });
    this.props.onDateChange(date);
    // 사가 통해 서버에 해당 date 보내서 todolist 데이터 받아오기!
  }

  onFocusChange({ focused }) {
    this.setState({ focused });
  }

  render() {
    const { focused } = this.state;
    const { date } = this.state;
    const { onFocusChange, onDateChange } = this;

    return (
      <SingleDatePicker
        isOutsideRange={() => false}
        hideKeyboardShortcutsPanel
        withPortal
        disableScroll
        numberOfMonths={1}
        readOnly
        date={date}
        onDateChange={onDateChange} // PropTypes.func.isRequired
        focused={focused} // PropTypes.bool > 클릭했을 때 피커 띄워주고 닫도록 해주는 역할
        onFocusChange={onFocusChange} // PropTypes.func.isRequired
        id="id"
      />
    )
  }
}