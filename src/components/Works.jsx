import React from "react";
import Tilt from "react-tilt";
import { motion } from "framer-motion";
import TransitionEffect from "./TransitionEffect";
import { styles } from "../styles";
import { net } from "../assets";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
}) => {
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className=' p-5 rounded-2xl sm:w-[360px] w-full'
      >
        <div className='relative w-full h-[230px]'>
          <img
            src={image}
            alt='project_image'
            className='w-full h-full object-cover rounded-2xl'
          />

          <div className='absolute inset-0 flex justify-end m-3 card-img_hover'>
            <div
              onClick={() => window.open(source_code_link, "_blank")}
              className='black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer'
            >
              <img
                src={net}
                alt='source code'
                className='w-1/2 h-1/2 object-contain'
              />
            </div>
          </div>
        </div>

        <div className='mt-5'>
          <h3 className='text-orange-400 font-bold text-[24px]'>{name}</h3>
          <p className='mt-2 text-black text-[14px]'>{description}</p>
        </div>

        <div className='mt-4 flex flex-wrap gap-2'>
          {tags.map((tag) => (
            <p
              key={`${name}-${tag.name}`}
              className={`text-[14px] ${tag.color}`}
            >
              #{tag.name}
            </p>
          ))}
        </div>
      </Tilt>
    </motion.div>
  );
};

const Works = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
      <TransitionEffect/>
        <p className={`${styles.sectionSubText} `}>My work</p>
        <h2 className={`text-orange-400 font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]`}>Projects.</h2>
      </motion.div>

      <motion.div className='w-full flex'>
      <TransitionEffect/>
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className='mt-3 text-black text-[17px] max-w-3xl leading-[30px]'
        >
    
I take immense pride in my portfolio, featuring a collection of real-world projects that serve as a testament to my skills and experience. 
Each project is accompanied by a brief description and accessible links, providing insight into my problem-solving abilities, proficiency with diverse technologies, and effective project management. 
These showcases highlight my capacity to tackle complex challenges and deliver exceptional results. Explore my portfolio and witness how I bring innovation and efficiency to every endeavor.
        </motion.p>
      </motion.div>

      <div className='mt-20 flex flex-wrap gap-7'>
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Works, "");
