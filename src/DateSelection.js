import React, { useState, useEffect } from 'react';
import { BsFillCalendarHeartFill } from 'react-icons/bs';
import Datetime from 'react-datetime';
import 'moment/locale/ko'; // 한국어 로케일 추가
import moment from 'moment';

// 수정해야함

function DateSelection() {
  const [date, setDate] = useState('');
  const [open, setOpen] = useState(false);
  const format = 'YYYY-MM-DD';

  //const [diffDays, setDiffDays] = useState(null);
  const [current, setCurrent] = useState(moment()); // 현재 날짜를 상태로 관리

  const handleClickButton = () => {
    setOpen(!open);
  };

  const handleChangeCalendar = (selected) => {
    const formattedDate = selected.format(format);
    
    // 시간 부분을 무시하고 날짜 부분만 고려한 차이를 계산
    //const daysDifference = selected.startOf('day').diff(current.startOf('day'), 'days');
    //setDiffDays(daysDifference);
  
    // 현재 날짜를 업데이트
    setCurrent(current);
  
    setDate(formattedDate);
    setOpen(false);
  };

  useEffect(() => {
    // 현재 날짜가 변경될 때마다 로그 출력
    console.log('현재 날짜가 업데이트되었음:', current);
    
  }, [current]); // current 값이 변경될 때만 useEffect 실행

  const handleChangeDate = (e) => {
    let selectDate = e.target.value;
    setDate(selectDate);
  };

  const isValidDate = (select) => {
    return select.isSameOrAfter(current, 'day');
  };

  return (
    <div>
      <div>
        <input
          type='text'
          value={date}
          placeholder='날짜 선택'
          onChange={handleChangeDate}
          disabled
        />

        <button type='button' onClick={handleClickButton}>
          <BsFillCalendarHeartFill />
        </button>
        {open && (
          <Datetime
            input={false}
            timeFormat={false}
            dateFormat={format}
            value={date}
            onChange={handleChangeCalendar}
            locale="ko"
            isValidDate={isValidDate}
          />
        )}
      </div>
      <div>
        <p>지금 날짜 표시: {current.format(format)}</p>
        <p>선택한 날짜 표시: {date}</p>
      </div>
    </div>
  );
}

export default DateSelection;
