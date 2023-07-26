import { motion } from "framer-motion";
import crown from "../assets/crown.png"
import { styles } from "../styles";

const Hero = () => {
  return (
    <section className={`relative w-full h-[500px] mx-auto`}>
      <div
        className={`absolute inset-0 top-[120px]  max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-orange-400' />
          <div className='w-1 sm:h-40 h-20 bg-orange-400' />
        </div>

        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm <span className='text-orange-400'>Aaron</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
          3D visuals, UI design, web apps - <br className='sm:block hidden' />
          Let's innovate together!
          </p>
        </div>
        <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="mt-4"
            >
              <img src={crown} alt="" width={300} className="animate-bounce animate-slide-right" />
            </motion.div>
      </div>
    </section>
  );
};

export default Hero;
