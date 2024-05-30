import React from 'react';
import styles from '../style';
import Button from './Button';

const CTA = () => {
  return (
    <section
      dir='rtl'
      className={`${styles.flexCenter} ${styles.marginY} ${styles.padding} sm:flex-row flex-col bg-black-gradient-2 rounded-[20px] box-shadow`}>
      <div className='flex-1 flex flex-col sm:pl-8'>
        <h2 className={`${styles.heading2} text-center md:text-right`}>
          خدمات مارا اکنون امتحان کنید!
        </h2>
        <p className={`${styles.paragraph} max-w-[595px] text-center mt-5`}>
          همه چیزهایی که برای پذیرش پرداخت های کارتی و رشد کسب و کار خود در هر
          نقطه از کره زمین نیاز دارید.
        </p>
      </div>
      <div className={`${styles.flexCenter} mt-8 sm:mt-0 sm:ml-10 ml-0`}>
        <Button />
      </div>
    </section>
  );
};

export default CTA;
