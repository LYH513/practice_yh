import React, { useState } from 'react';

function Birthday() {
  const now = new Date();
  const nowYear = now.getFullYear();

  const [form, setForm] = useState({
    year: nowYear.toString(),
    month: "01",
    day: "01",
  });

  const [selectedBirthday, setSelectedBirthday] = useState(null);

  let years = [];
  for (let y = nowYear; y >= 1930; y -= 1) {
    years.push(y.toString());
  }

  let months = [];
  for (let m = 1; m <= 12; m += 1) {
    if (m < 10) {
      months.push("0" + m.toString());
    } else {
      months.push(m.toString());
    }
  }

  let days = [];
  let date = new Date(form.year, form.month, 0).getDate();
  for (let d = 1; d <= date; d += 1) {
    if (d < 10) {
      days.push("0" + d.toString());
    } else {
      days.push(d.toString());
    }
  }

  const handleButtonClick = () => {
    // 현재 선택한 생년월일을 로그에 출력
    console.log("Selected Birthday:", form.year, form.month, form.day);
    // 또는 선택한 생년월일을 다른 곳에서 활용할 수 있도록 state에 저장
    setSelectedBirthday(`${form.year}-${form.month}-${form.day}`);
  };

  // 확인 버튼 활성화 여부를 결정하는 조건
  const isConfirmButtonDisabled =
    new Date(`${form.year}-${form.month}-${form.day}`) > now;

  return (
    <div>
      <select
        value={form.year}
        onChange={(e) => setForm({ ...form, year: e.target.value })}
      >
        {years.map((item) => (
          <option value={item} key={item}>
            {item}
          </option>
        ))}
      </select>

      <select
        value={form.month}
        onChange={(e) => setForm({ ...form, month: e.target.value })}
      >
        {months.map((item) => (
          <option value={item} key={item}>
            {item}
          </option>
        ))}
      </select>

      <select
        value={form.day}
        onChange={(e) => setForm({ ...form, day: e.target.value })}
      >
        {days.map((item) => (
          <option value={item} key={item}>
            {item}
          </option>
        ))}
      </select>

      <button
        onClick={handleButtonClick}
        disabled={isConfirmButtonDisabled} // 버튼 비활성화
      >
        확인
      </button>

      {/* 선택한 생년월일을 보여주기 위한 예시 */}
      {selectedBirthday && (
        <p>선택한 생년월일: {selectedBirthday}</p>
      )}
    </div>
  );
}

export default Birthday;
