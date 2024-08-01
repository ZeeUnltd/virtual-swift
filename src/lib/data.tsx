import { Icons } from '@/components/icons';

export const links = [
  {
    name: 'Home',
    hash: '#home',
  },
  {
    name: 'About',
    hash: '#about',
  },
  {
    name: 'Projects',
    hash: '#projects',
  },
  {
    name: 'Experience',
    hash: '#experience',
  },
  {
    name: 'Contact',
    hash: '#contact',
  },
] as const;

export const projectsData = [
  // https://aop.ubagroup.com/businessaccountopening/favicon.ico
  {
    image: 'https://aop.ubagroup.com/businessaccountopening/favicon.ico',
    title: 'Account Opening Revamp Project',
    description:
      'Next-generation social media app, ',
    technologies: ['Vue', 'Javascript', 'Vuex', 'Bootstrap', 'IIS', 'i18n'],
    links: {
      preview: 'https://aop.ubagroup.com/businessaccountopening/',
    },
  },
  {
    image: '/projects/nextstarter.svg',
    title: 'Next-starter',
    description: 'Next.js starter template, packed with useful features.',
    technologies: [
      'Next.js',
      'TypeScript',
      'Tailwind',
      'Shadcn/ui',
      'Next-auth',
      'Prisma',
    ],
    links: {
      preview: 'https://next-starter-skolaczk.vercel.app',
      github: 'https://github.com/Skolaczk/next-starter',
      githubApi: 'https://api.github.com/repos/Skolaczk/next-starter',
    },
  },
  {
    image: '/projects/audiophile.svg',
    title: 'Audiophile',
    description: 'Online store specializing in headphones and speakers.',
    technologies: [
      'React',
      'Styled-components',
      'TypeScript',
      'Stripe',
      'Firebase',
    ],
    links: {
      preview: 'https://audiophile-ms.netlify.app/',
      github: 'https://github.com/Skolaczk/Audiophile',
      githubApi: 'https://api.github.com/repos/Skolaczk/Audiophile',
    },
  },
] as const;

export const experiencesData = [
  {
    title: 'Leatherback',
    location: 'London, UK. (Remote)',
    description:
      // `● Collaborated with a team of 10 designers and developers, working closely with stakeholders to deliver a high-quality,
      //   user-centric product that met or exceeded all assigned deadlines. 

      //   ● Significantly contributed to revenue growth, scaling from $10,000 to over $6 million in monthly transactions.
      //   ● Transformed more than 50 design prototypes into fully functional web interfaces using HTML, CSS, and JavaScript,
      //   leading to substantially improved user experiences.

      //   ● Converted a total of 200+ email templates from raw markup to visually appealing, responsive designs, elevating email
      //   communication.

      //   ● Seamlessly translated 100% of UI/UX designs into intuitive web interfaces, consistently meeting or surpassing all
      //   assigned deadlines.

      //   ● Played an integral role in developing and delivering over 30 critical business features and modules, pivotal to the
      //   successful completion of key projects.

      //   ● Instrumental in the launch of a new product targeting the competitive digital payments market in Nigeria, projected to
      //   reach a market volume of $27.89 billion by 2027.

      //   ● Designed and executed a strategic pricing strategy that yielded a 50% increase in profitability for the new product line.`,,
      <ul>
        <li>● Collaborated with a team of over 20 designers and developers, working closely with stakeholders to deliver high-quality,
          user-centric products that met or exceeded all assigned deadlines. </li>
        <li>
          ● Transformed more than 50 design prototypes into fully functional web interfaces using HTML, CSS, and JavaScript, TypeScript, Vue and Nuxt,
        </li>
        <li>
          ● Collaborated with a team of more than 10 designers and developers, working closely with stakeholders to deliver a high-quality,
          user-centric product that met or exceeded all assigned deadlines.
        </li>
        <li>
          ●  Significantly contributed to revenue growth, scaling from $10,000 to over $6 million in monthly transactions by completing crucial user-facing feature to acheive business goals for the organisation.
        </li>
        <li>
          ● Played an integral role in developing and delivering over 30 critical business features and modules, pivotal to the
          successful completion of key projects.
        </li>
      </ul>
    ,
    date: '2024 - Present',
  },
  {
    title: 'United Bank For Africa',
    location: 'Marina, Lagos',
    description:
      // 'During my internship at Chop-Chop, I collaborated with an experienced IT team, focusing on tasks in Next.js. This experience provided valuable insights into teamwork and advanced my proficiency in Next.js.'
      <ul>
        <li>
          ● Revamped the bank's onboarding process, creating a user-friendly interface that will benefit over 10 million users while
          ensuring accessibility, internalization  and responsitivity  across multiple devices.
        </li>
        <li>
          ● Created an Internal monitoring dashboard for tracking a significant portion (at least 30%) of the forex inflows through Ria Money
          transfers.
        </li>
        <li>
          ● I led and managed the development and design of five major projects, implementing a modern front-end infrastructure
          using Vue.js, a JavaScript-centric app framework.
        </li>
        <li>
          ● I provided mentorship and guidance to a team of 10 co-developers as they transitioned to front-end development technologies and design.
        </li>
      </ul>
    ,
    date: '2021',
  },
  {
    title: 'Schoolable',
    location: 'V.I, Lagos',
    description:
      <ul>
        <li>
          ● Successfully launched a flagship finance tool for schools and parents, resulting in a notable 35% increase in the customer base.
        </li>
        <li>
          ● Developed a new user-facing feature that improved usability by 60% and allows users to track their data in real time
        </li>
        <li>
          ● Translated 100% of UI/UX interfaces into functional mock-ups for seamless application development.
        </li>
        <li>
          ● Designed and implemented visual elements for 20+ applications, ensuring each featured an attractive and user-friendly interface.
        </li>
        <li>
          ● Comenced and maintained 10+ reusable code libraries, resulting in a 20% reduction in development time for subsequent projects.
        </li>
        <li>
          ● Played a key role in the redesign of the company's website, aligning it with modern specifications and resulting in a 40% increase in
          user engagement.
        </li>
        <li>
          Aced the First 3 month of rigorous tasks and assignments before confirmation
        </li>
      </ul>,
    date: '2018',
  },
] as const;

export const skillsData = [
  { icon: <Icons.html className="size-12" /> },
  { icon: <Icons.css className="size-12" /> },
  { icon: <Icons.sass className="size-12" /> },
  { icon: <Icons.tailwind className="size-12" /> },
  { icon: <Icons.javascript className="size-12" /> },
  { icon: <Icons.typescript className="size-12" /> },
  { icon: <Icons.vue className="size-12" /> },
  { icon: <Icons.react className="size-12" /> },
  { icon: <Icons.redux className="size-12" /> },
  { icon: <Icons.nuxt className="size-12" /> },
  // { icon: <Icons.nextjs className="size-12" /> },
  { icon: <Icons.node className="size-12" /> },
  // { icon: <Icons.prisma className="size-12" /> },
  // { icon: <Icons.docker className="size-12" /> },
] as const;
