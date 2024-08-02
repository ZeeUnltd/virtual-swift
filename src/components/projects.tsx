'use client';

import { motion } from 'framer-motion';

import { Project } from '@/components/project';
import { SectionHeading } from '@/components/section-heading';
import { useSectionInView } from '@/hooks/use-section-in-view';
import { projectsData } from '@/lib/data';

type TProps = {
  starsCount?: number[];
};
// { starsCount }: TProps
export const Projects = () => {
  const { ref } = useSectionInView('Projects');

  return (
    <section ref={ref} id="projects" className="my-10 scroll-mt-28">
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          delay: 0.175,
        }}
        viewport={{
          once: true,
        }}
      >
        <SectionHeading
          heading="My Projects"
          content="Projects I have worked on and still available online, I have worked on alot of projects, but can only preview those with external links for public viewing. Each of them containing its own case study."
        />
      </motion.div>
      <div className="grid-rows grid  gap-3 md:grid-cols-2 lg:grid-cols-3">
        {projectsData.map((project, index) => (
          <Project key={project.title} project={project} index={index} />
          // starsCount={starsCount}
        ))}
      </div>
    </section>
  );
};
