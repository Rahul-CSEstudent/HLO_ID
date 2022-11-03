import { feedback } from "../constants";
import styles from "../style";
import FeedbackCard from "./FeedbackCard";

const Testimonials = () => (
  <section id="clients" className={`${styles.paddingY} ${styles.flexCenter} flex-col relative `}>
    {/*<div className="absolute z-[0] w-[60%] h-[60%] -right-[50%] rounded-full blue__gradient bottom-40" />

      <div className="w-full flex justify-between items-center md:flex-row flex-col sm:mb-16 mb-6 relative z-[1]">
      <h2 className={styles.heading2}>
        What People are saying about us
      </h2> */}
      {/* <div className="w-full md:mt-0 mt-6">
        <p className={`${styles.paragraph} text-left max-w-[450px]`}>
          Everything you need to accept card payments and grow your business
          anywhere on the planet.
        </p>
      </div> 
    </div> */}

    <div className="flex flex-wrap sm:justify-start justify-center w-full feedback-container relative z-[1]">
      {/* {feedback.map((card) => <FeedbackCard key={card.id} {...card} />)} */}
      <h2 className={styles.heading2}>Frequently Asked Questions</h2>
        <div className="w-1/2 pr-8">
          <h5 className={styles.heading3}>1. How to create and reserve HLO ID??</h5>
          <p className={styles.paragraph}>Creating HLO ID is an absolute quick process. Just <a className="">click here</a> to create one and get started.</p>


          <h5 className={styles.heading3}>2. How does HLO ID help me?</h5>
          <p className={styles.paragraph}>You shall access all applications from HLO and also extend availability with games and apps of partners.</p>

          <h5 className={styles.heading3}>3. Does HLO ID work in multi-platforms?</h5>
          <p className={styles.paragraph}>Yes! HLO ID works in multi-platforms such as iOS, android and web application.</p>
        </div>

        <div className="w-1/2 px-5">
          <h5 className={styles.heading3}>4. Who is eligible to create HLO ID?</h5>
          <p className={styles.paragraph}>Anyone above 13 years of age is eligible to create and access HLO ID.</p>


          <h5 className={styles.heading3}>5. How to contact HLO ID support team?</h5>
          <p className={styles.paragraph}>Kindly, click here to contact us. Our support team will get in touch with you soon.</p>

          <h5 className={styles.heading3}>6. Does HLO ID work for all apps?</h5>
          <p className={styles.paragraph}> Yes! HLO ID works for HloChat, HloApp and other partner apps.</p>
        </div>
</div>

  </section>
);

export default Testimonials;
