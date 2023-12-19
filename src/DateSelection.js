import React, { useState, useEffect } from 'react';
import { BsFillCalendarHeartFill } from 'react-icons/bs';
import Datetime from 'react-datetime';
import 'moment/locale/ko'; // 한국어 로케일 추가
import moment from 'moment';

function DateSelection() {
    const [date, setDate] = useState('');
    const [open, setOpen] = useState(false);
    const format = 'YYYY-MM-DD';

    const handleClickButton = () => {
        setOpen(!open);
    };

    const handleChangeCalendar = (selected) => {
        const formattedDate = selected.format(format);
        setDate(formattedDate);
        setOpen(false);
    };
  const getSeparator = () => {
    const regex = /[^0-9a-zA-Z]+/;
    const match = format.match(regex);

    if (match) {
      const symbol = match[0];
      const indexes = [];

      for (let i = 0; i < format.length; i++) {
        if (format[i] === symbol) {
          indexes.push(i);
        }
      }

      return { symbol, indexes };
    }
    return { symbol: undefined, indexes: [] };
  };

  const separator = getSeparator();
  
  useEffect(() => {
    console.log(separator);
    // { symbol: '-', indexes: [4, 7] }
  }, []);

  const handleChangeDate = (e) => {
    let currentDate = e.target.value;

    setDate(currentDate);
  };

// 현재 날짜 이후의 날짜만 선택 가능하도록 설정
  const isValidDate = (current) => {
    return current.isSameOrAfter(moment(), 'day');
  };

  return (
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
  );
};

export default DateSelection;