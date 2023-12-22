import React, { useState } from 'react';

function BankList() {
  const banks = [
    "Bank A",
    "Bank B",
    "Bank C",
  ];

  const [selectedBank, setSelectedBank] = useState(null);

  const handleBankChange = (e) => {
    setSelectedBank(e.target.value);
  };

  return (
    <div>
      {selectedBank && (
        <p>선택된 은행: {selectedBank}</p>
      )}

      <select
        value={selectedBank}
        onChange={handleBankChange}
      >
        <option value="" disabled>은행 선택</option>
        {banks.map((bank) => (
          <option value={bank} key={bank}>
            {bank}
          </option>
        ))}
      </select> 

    </div>
  );
};
  
  export default BankList;