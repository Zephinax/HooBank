import React from 'react';
import { features } from '../constants';
import styles, { layout } from '../style';
import Button from './Button';

const FeatureCard = ({ icon, title, content, index }) => (
  <div
    dir='rtl'
    className={`flex flex-row gap-2 items-center p-6 rounded-[20px] cursor-pointer ${
      index !== features.length - 1 ? 'mb-6' : 'mb-0'
    } feature-card`}>
    <div
      className={`w-[64px] h-[64px] rounded-full ${styles.flexCenter} bg-dimBlue`}>
      <img src={icon} alt='icon' className='w-[50%] h-[50%] object-contain' />
    </div>
    <div className='flex-1 flex flex-col ml-3'>
      <h4 className='font-poppins font-semibold text-white text-[18px] leading-[23px] mb-1'>
        {title}
      </h4>
      <p className='font-poppins font-normal text-dimWhite text-[16px] leading-[24px]'>
        {content}
      </p>
    </div>
  </div>
);

const Business = () => {
  return (
    <section id='features' className={layout.section}>
      <div
        dir='rtl'
        className={`${layout.sectionInfo} items-center text-center`}>
        <h2 className={styles.heading2}>
          شما کار را انجام دهید, <br className='sm:block hidden' />
          ما پول را مدیریت میکنیم
        </h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          با کارت اعتباری مناسب، می توانید زندگی مالی خود را بهبود بخشید ایجاد
          اعتبار، کسب پاداش و پس انداز پول. اما با صدها کارت های اعتباری موجود
          در بازار
        </p>
        <Button styles='mt-10' />
      </div>
      <div className={`${layout.sectionImg} flex-col`}>
        {features.map((feature, index) => (
          <FeatureCard key={feature.id} {...feature} index={index} />
        ))}
      </div>
    </section>
  );
};

export default Business;
