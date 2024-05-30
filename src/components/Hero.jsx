import styles from '../style';
import { discount, robot } from '../assets';
import GetStarted from './GetStarted';

const Hero = () => {
  return (
    <section
      dir='rtl'
      id='home'
      className={`flex md:flex-row flex-col ${styles.paddingY}`}>
      <div
        dir='rtl'
        className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}>
        <div
          dir='rtl'
          className='flex flex-row items-center py-[6px] px-4 bg-discount-gradient rounded-[10px] mb-2'>
          <img src={discount} alt='discount' className='w-[32px] h-[32px]' />
          <p className={`${styles.paragraph} ml-2`}>
            ۲۰ <span className='text-white'>تخفیف</span> برای حساب{' '}
            <span className='text-white'>۱ ساله</span>
          </p>
        </div>
        <div className='flex flex-row justify-between items-center w-full'>
          <h1 className='flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100.8px] leading-[75px]'>
            نسل بعدی <br className='sm:block hidden' />{' '}
            <span className='text-gradient'>روش پرداخت.</span>{' '}
          </h1>
          <div className='ss:flex hidden md:mr-4 mr-0'>
            <GetStarted />
          </div>
        </div>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          تیم کارشناسان ما از روشی برای شناسایی کارت های اعتباری استفاده می کنند
          به احتمال زیاد مطابق با نیازهای شما ما نرخ های درصد سالانه را بررسی می
          کنیم، هزینه های سالانه.
        </p>
      </div>
      <div
        className={`flex-1 flex ${styles.flexCenter} scale-x-[-1] md:my-0 my-10 relative`}>
        <img
          src={robot}
          alt='billing'
          className='w-[100%] h-[100%] relative z-[5]'
        />
        <div className='absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient' />
        <div className='absolute z-[1] w-[80%] h-[80%] rounded-full white__gradient bottom-40' />
        <div className='absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient' />
      </div>
      <div className={`ss:hidden ${styles.flexCenter}`}>
        <GetStarted />
      </div>
    </section>
  );
};

export default Hero;
