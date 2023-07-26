import React from "react";
import Tilt from "react-tilt";
import { motion } from "framer-motion";
import TransitionEffect from "./TransitionEffect";
import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const ServiceCard = ({ index, title, icon }) => (
  <Tilt className='xs:w-[250px] w-full'>
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className='w-full p-[1px] rounded-[20px] -card'
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-sky-800 rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
      >
        <img
          src={icon}
          alt='web-development'
          className='w-16 h-16 object-contain'
        />

        <h3 className='text-orange-400 text-[20px] font-bold text-center'>
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
      <TransitionEffect/>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className='text-orange-400 font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]'>About Me</h2>
      </motion.div>

      <motion.p
        className='mt-4 text-black text-[17px] max-w-3xl leading-[30px]'
      >
        <TransitionEffect/>
I am a highly skilled software developer with extensive experience in TypeScript and JavaScript. My expertise spans across various frameworks, including React, Node.js, SpringBoot and Three.js. Moreover, I learn at a fast rate and adept at collaborating closely with clients to develop efficient, scalable, and user-friendly solutions that tackle real-world challenges. 
In addition to my proficiency in software development, I also possess a diverse skill set. I have a keen eye for design and can easily take on tasks as a graphic designer. Furthermore, I am well-versed in database administration.
I am excited to work with you and bring your ideas to life. Whether it's creating stunning visuals, optimizing database performance, or crafting top-notch software solutions, I am confident in my ability to deliver exceptional results. Let's collaborate and make your projects a resounding success!
      </motion.p>

      <div className='mt-20 flex flex-wrap gap-10'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
