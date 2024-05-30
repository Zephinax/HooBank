import React from 'react';
import { stats } from '../constants';
import styles from '../style';
import CountUp from './CountUp';

const Stats = () => {
  return (
    <section
      className={`${styles.flexCenter} flex-col sm:flex-row flex-wrap sm:mb-20 mb-6`}>
      {stats.map((stat) => (
        <div
          dir='rtl'
          key={stat.id}
          className={`flex-1 flex justify-center gap-1 items-center flex-row m-3`}>
          <h4
            dir='ltr'
            className='font-poppins font-semibold xs:text-[40px] text-[30px] xs:leading-[53px] leading-[43px] text-white '>
            <CountUp start={0} end={parseInt(stat.value, 10)} duration={10} />+
          </h4>
          <p className='text-nowrap font-poppins font-normal xs:text-[20px] text-[15px] xs:leading-[26px] leading-[21px] text-gradient uppercase ml-3'>
            {stat.title}
          </p>
        </div>
      ))}
    </section>
  );
};

export default Stats;
