import React from 'react';
import { useLocation } from "react-router-dom";

function Linkmaker() {
    const location = useLocation();

    return (
        <div>
            페이지 정보: {location.pathname} 
        </div>
    );
  };
  
  export default Linkmaker;