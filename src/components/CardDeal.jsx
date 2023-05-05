import { card } from "../assets"
import styles, { layout } from "../styles"
import Button from "./Button"

const CardDeal = () => (
    <section className={layout.section}>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
      Create virtual and physical <br className="sm:block hidden md:hidden"/>cards  in few easy steps.
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
      BulanPay issues virtual and physical cards that work globally. Create, launch, and manage your cards easily from anywhere.
      </p>
      <Button styles="mt-5" />
    </div>

    <div className={layout.sectionImg}>
    <img src={card} alt="card" className="w-[100%] h-[100%]" />

    </div>

    </section>
  )


export default CardDeal