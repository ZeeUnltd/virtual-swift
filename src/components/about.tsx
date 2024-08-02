'use client';

import { motion } from 'framer-motion';

import { SectionHeading } from '@/components/section-heading';
import { Skills } from '@/components/skills';
import { useSectionInView } from '@/hooks/use-section-in-view';

export const About = () => {
  const { ref } = useSectionInView('About');

  return (
    <motion.section
      ref={ref}
      id="about"
      className="my-10 flex w-full scroll-mt-28 flex-col items-center"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
    >
      <SectionHeading heading="About Me" />
      <div className="-mt-5 max-w-2xl text-center leading-7">
        <p className="mb-4">
          Azeez graduated with a Bachelor's Degree in Computer Science in 2017.
          He loves to figure things out and work on solutions to problems. He
          has had the opportunity to work on several exciting projects in his
          career, ranging from personal projects to collaborative ventures. His
          core stack includes Vue, Nuxt, React, Next.js, JavaScript, TypeScript,
          and Tailwind CSS, along with a little bit of Node.js. He is also
          interested in learning other frameworks such as Angular, Laravel, and
          Spring Boot and .Net. He is interested in building mobile applications
          when he has the time aswell.
        </p>
        <p>
          He is open to job opportunities where he can contribute, learn, and
          grow. If you have a good opportunity that matches his skills and
          experience, please don't hesitate to contact him.
        </p>
        <div className="fade-in animate flex justify-center text-wrap">
          <img
            src="https://res.cloudinary.com/beam-sensation/image/upload/v1720735141/portfolio/az._qa20qv.jpg"
            alt=""
            className="deformed-circle magnetic w-[30%]"
          />
        </div>
      </div>
      <Skills />
    </motion.section>
  );
};
