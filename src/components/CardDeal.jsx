import React from 'react';
import { card } from '../assets';
import Button from './Button';
import styles, { layout } from '../style';

const CardDeal = () => {
  return (
    <section className={layout.section}>
      <div
        dir='rtl'
        className={`${layout.sectionInfo} items-center text-center`}>
        <h2 className={styles.heading2}>
          در چند مرحله آسان، <br className='sm:block hidden' />
          معامله بهتری پیدا کنید.
        </h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده
          از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و
          سطرآنچنان که لازم است
        </p>
        <Button styles='mt-10' />
      </div>
      <div className={layout.sectionImg}>
        <img src={card} alt='card' className='w-[100%] h-[100%]' />
      </div>
    </section>
  );
};

export default CardDeal;
