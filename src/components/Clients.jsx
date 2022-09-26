import styles from '../styles'
import { clients } from '../constants'

function Clients() {
  return (
    <section className={`${styles.flexCenter} my-4`}>
      <div className={`${styles.flexCenter} flex-wrap w-full`}>
        {clients.map((client, index) => (
          <div key={client.id} className={`flex-1 ${styles.flexCenter} sm:min-w-[192px] min-w-[120px] cursor-pointer ${index === clients.length - 1 ? 'md:mt-0 sm:mt-8 mt-0' : 'mt-0'}`}>
            <img src={client.logo} alt="client" className='object-contain sm:w-[192px] w-[100px]'/>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Clients