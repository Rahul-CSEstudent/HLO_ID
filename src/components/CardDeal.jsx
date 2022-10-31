import { multiplatform, smartphone } from "../assets";
import styles, { layout } from "../style";
import Button from "./Button";

const CardDeal = () => (
  <section className={layout.section}>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        Find a better card deal <br className="sm:block hidden" /> in few easy
        steps.
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
      Multi-platform
We additionally concentrate on the convenience of our users. Thus, HLO works on different platforms such as:
<ul>
<li>* iOS</li>
<li>* Android</li>
<li>* Web application</li>
</ul>
      </p>

      <Button styles={`mt-10`} />
    </div>

    <div className={layout.sectionImg}>
      <img src={multiplatform} alt="billing" className="w-[90%] h-[90%] rounded-2xl" />
    </div>
  </section>
);

export default CardDeal;
