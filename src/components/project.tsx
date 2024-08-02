'use client';

import {
  AwaitedReactNode,
  JSXElementConstructor,
  ReactElement,
  ReactNode,
  ReactPortal,
  useState,
} from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

import { Button } from '@/components/button';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/dialog';
import { Icons } from '@/components/icons';
import { projectsData, TProjectLinks } from '@/lib/data';

type TProject = (typeof projectsData)[number];

type TProps = {
  project: TProject;
  index: number;
  starsCount?: number[];
};

const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.1 * index,
    },
  }),
};
// starsCount
// const Content = (noClamp: boolean, image: any, title: string | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | Promise<AwaitedReactNode> | null | undefined, setOpen: (arg0: boolean) => void): JSX.Element => (
interface ContentProps {
  noClamp?: boolean;
  image?: any;
  title?: string | null | undefined;
  description?: string | null | undefined;
  technologies?: readonly [string | null | undefined];
  setOpen?: (arg0: boolean) => void;
}
const Content = ({
  noClamp,
  image,
  title,
  setOpen,
  description,
  technologies,
}: ContentProps): JSX.Element => (
  <>
    <div className="bg-muted w-fit rounded-full p-4">
      <Image src={`${image}`} alt={`${title} image`} width={32} height={32} />
    </div>
    <h3 className="my-2 text-lg font-medium">{title}</h3>
    <div className={'text-muted-foreground'}>{description}</div>

    {/* {
      noClamp && (
        <div className='w-full flex justify-end my-3'>
          <Button onClick={() => setOpen(true)} variant="outline" size="lg" >
            Read More...
          </Button>
        </div>
      )
    } */}
  </>
);
export const Project = ({ project, index }: TProps) => {
  const { image, title, description, technologies, links } = project;
  const [open, setOpen] = useState(false);
  // const [selProj, setSelectedProj] = useState(null)

  const Badges = () => (
    <div className="my-3 flex flex-wrap gap-2">
      {technologies &&
        technologies.map((tech) => (
          <span className="bg-muted rounded-full px-3 py-1 text-sm" key={tech}>
            {tech}
          </span>
        ))}
    </div>
  );

  return (
    <motion.div
      variants={fadeInAnimationVariants}
      initial="initial"
      whileInView="animate"
      viewport={{
        once: true,
      }}
      custom={index}
      className="bg-secondary rounded p-5"
    >
      <div className="bg-muted w-fit rounded-full p-4">
        {image && (
          <Image
            src={`${image}`}
            alt={`${title} image`}
            width={32}
            height={32}
          />
        )}
      </div>
      <h3 className="my-2 text-lg font-medium">{title}</h3>
      <div className={'text-muted-foreground, line-clamp-4'}>{description}</div>

      <div className="my-3 flex w-full justify-end">
        <Button onClick={() => setOpen(true)} variant="outline" size="lg">
          Read More...
        </Button>
      </div>
      <Badges />
      {links && links.preview && (
        <Button variant="outline" asChild className="mr-2 px-5">
          <a href={links.preview} target="_blank" aria-label="preview project">
            <Icons.preview className="size-5" />
          </a>
        </Button>
      )}
      {links?.github && (
        <Button variant="outline" asChild className="mr-2 px-5">
          <a href={links?.github} aria-label="github">
            <Icons.githubOutline className="size-5" />
          </a>
        </Button>
      )}
      {/* {starsCount[index] > 100 && (
        <Button asChild className="px-5">
          <a href={links.github} aria-label="github">
            <Icons.star className="mr-2 size-5" />
            <span className="font-bold">{starsCount[index]}</span>
          </a>
        </Button>
      )} */}

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
          {/* <Button variant="secondary" size="lg" className="sm:hidden">
            Menu <Icons.chevronDown className="ml-2 size-4" />
          </Button> */}
        </DialogTrigger>
        <DialogContent
          aria-describedby={title}
          className="text-muted-foreground max-h-screen w-[90%] rounded"
        >
          <DialogHeader>
            <DialogTitle className="text-md self-start font-medium">
              <span className="opacity-0">{title}</span>
            </DialogTitle>
          </DialogHeader>
          <div className="bg-muted w-fit rounded-full p-4">
            {image && (
              <Image
                src={`${image}`}
                alt={`${title} image`}
                width={32}
                height={32}
              />
            )}
          </div>
          <h3 className="my-2 text-lg font-medium">{title}</h3>
          <div className={'text-muted-foreground'}>{description}</div>
          <Badges />
          {links && links.preview && (
            <Button variant="outline" asChild className="mr-2 px-5">
              <a
                href={links.preview}
                target="_blank"
                aria-label="preview project"
              >
                <Icons.preview className="size-5" />
              </a>
            </Button>
          )}
          {links?.github && (
            <Button variant="outline" asChild className="mr-2 px-5">
              <a href={links?.github} aria-label="github">
                <Icons.githubOutline className="size-5" />
              </a>
            </Button>
          )}
        </DialogContent>
      </Dialog>
    </motion.div>
  );
};
