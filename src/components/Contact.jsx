import React, { useRef, useState } from "react";
import { motion } from "framer-motion";

import { styles } from "../style";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { target } = e;
    const { name, value } = target;

    setForm({
      ...form,
      [name]: value,
    });
  };



  return (
    <div
      className={`xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden`}
    >
      <motion.div
  variants={slideIn("left", "tween", 0.2, 1)}
  className='flex-[0.75] bg-black-100 p-8 rounded-2xl'
>
  <p className={styles.sectionSubText}>Get in touch</p>
  <h3 className={styles.sectionHeadText}>Contact.</h3>

  <div className="contact-info">
    <h2 className="contact-name">ASHLY P ELIAS</h2>
    <p className="contact-email">Email: ashlyelias24@gmail.com</p>
    <p className="contact-phone">Phone: 6282738831</p>
    
  </div>
</motion.div>

<motion.div
  variants={slideIn("right", "tween", 0.2, 1)}
  className='xl:flex-1 xl:h-auto md:h-[550px] h-[350px]'
>
  <EarthCanvas />
</motion.div>

    </div>
  );
};

export default SectionWrapper(Contact, "contact");