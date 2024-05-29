import React from 'react';

const Button = ({ styles }) => {
  return (
    <button
      type='button'
      className={`py-3 px-5 bg-blue-gradient font-poppins font-medium text-[18px] text-primary outline-none ${styles} rounded-[10px]`}>
      شروع کنید
    </button>
  );
};

export default Button;
