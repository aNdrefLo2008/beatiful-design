import { apple, bill, google } from '../assets'
import styles, { layout } from '../styles'

function Billing() {
  return (
    <section id="product" className={layout.sectionReverse}>
      <div className={layout.sectionImgReverse}>
        <img src={bill} alt="billing" className='w-full h-full relative z-[5]'/>

        <div className='absolute z-3 -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient' />
        <div className='absolute z-0 -left-1/2 bottom-0 w-[50%] h-[50%] rounded-full pink__gradient' />
      </div>

      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>Easily control your <br src="sm:block hidden"/> billing & invoicing</h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        Elit enim sed massa etiam. Mauris eu adipiscing ultrices ametodio
        aenean neque. Fusce ipsum orci rhoncus aliporttitor integer platea
        placerat.
      </p>

      <div className='flex flex-row flex-wrap sm:mt-10 mt-6 cursor-pointer'>
        <img src={apple} alt="apple_store" classname="w-[128px] h-[42px] object-contain mr-5"/>
        <img src={google} alt="google_play" classname="w-[128px] h-[42px] object-contain"/>
      </div>
      </div>
    </section>
  )
}

export default Billing