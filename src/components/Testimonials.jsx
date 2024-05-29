import React from 'react';
import { feedback } from '../constants';
import styles from '../style';
import Feedback from './Feedback';

const Testimonials = () => {
  return (
    <section
      id='clients'
      className={`${styles.paddingY} ${styles.flexce} flex-col relative`}>
      <div className='absolute z-[0] w-[60%] h-[60%] -right-[50%] rounded-full blue__gradient bottom-40' />
      <div
        dir='rtl'
        className='w-full text-center flex justify-between items-center md:flex-row flex-col sm:mb-16 mb-6 relative z-[1]'>
        <h2 className={styles.heading2}>
          مشتریان چه چیزی <br className='sm:block hidden' />
          راجب ما میگویند؟
        </h2>
        <div className='  lg:w-full flex items-center md:mt-0 mt-6'>
          <p className={`${styles.paragraph}  max-w-[450px]`}>
            همه چیزهایی که برای پذیرش پرداخت های کارتی و رشد کسب و کار خود در هر
            نقطه از کره زمین نیاز دارید.
          </p>
        </div>
      </div>
      <div className='flex flex-wrap gap-4 justify-center w-full feedback-contrainer relative z-[1]'>
        {feedback.map((card) => (
          <Feedback key={card.id} {...card} />
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
