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
export type TProjectLinks = {
  image?: string;
  title?: string;
  description?: React.ReactNode | string;
  technologies?: string[];
  links?: {
    preview: string;
    github?: string;
  };
};
export const projectsData: TProjectLinks[] = [
  // https://aop.ubagroup.com/businessaccountopening/favicon.ico
  {
    image: 'https://aop.ubagroup.com/businessaccountopening/favicon.ico',
    title: 'Account Opening Revamp Project',
    description: (
      <div className="space-y-2">
        <p>Revamped Onboarding Platform for United Bank For Africa</p>
        <p>
          To develop a fresh user experience for our potential users; I was to
          to work with one of our UI/UX designers to create a new User
          experience to our prospective users.
        </p>
        <p>
          Since there are several products with different onbording processes,
          the requirment was to creat just one platform that houses all the
          onboarding processes together in one.
        </p>
        <p>
          After several Iterations on design, I developed all the components
          without overloading the application with several libraries, leveraging
          i18n as we support multiple languages, and used Vue Js for the
          interactivity and Vuex for state management.
        </p>
        <p>
          I deployed to the testing/staging server and completed the Application
          ontime after several iteration on adoption. The corporate team
          department adopted the change instantly and deployed the application
          before the other departments were ready for the change.
        </p>

        <p>
          The major challenge confronted here was selection for distinctive
          divisions as the backend assets at the time were not REST APIs, so it
          was reliant on each division to supply the neccessary resources for
          the plug in. I am happy the platform is still up and running and
          usable for the following million clients since I cleared out the
          organization.
        </p>
      </div>
    ),
    technologies: [
      'Vue',
      'Javascript',
      'Vuex',
      'Bootstrap',
      'IIS',
      'i18n',
      'Git',
    ],
    links: {
      preview: 'https://aop.ubagroup.com/businessaccountopening/',
    },
  },
  {
    image: 'https://leatherback.co/favicon.png',
    title: 'Leatherback App',
    description: (
      <>
        <p>
          A multi-currency platform that removes complex processes that come
          with sending and receiving money globally.
        </p>
        <p>
          I am part of the collaborative team that built this platform, and very
          greatful with the team and members for making the journey a smooth
          process.{' '}
        </p>
      </>
    ),
    technologies: [
      'Nuxt.js',
      'TypeScript',
      'Tailwind',
      'TDD',
      'Vuex',
      'etc...',
    ],
    links: {
      preview: 'https://leatherback.co/',
    },
  },
  {
    image: 'https://leatherback.co/favicon.png',
    title: 'Fusion',
    description: `Platform for managing API for businesses using to Increase your Productivity and track sales and transactions`,
    technologies: [
      'Nuxt',
      'Styled-components',
      'TypeScript',
      'Vuex',
      'Tailwind',
      'AntD',
    ],
    links: {
      preview: 'https://access.leatherback.co/',
    },
  },
  {
    image: 'https://priscrption-pharmanager.vercel.app/favicon.ico',
    title: 'Pharmanager (WIP)',
    description: (
      <div className="space-y-2">
        <p className="font-medium">Currently working on this...</p>
        <p>Really proud of this product as it is already very impactfull.</p>
        <p>
          Pharmanager is a simple, yet powerful platform that allows you to
          manage your patients, invoices/billings, pharmacy inventory,
          prescriptions, and sales. It's designed to be easy to use and
          efficient, making it a great tool for managing your
          hospital/pharmacy/lab operations.
        </p>
        <p>
          The major focus of development of this product is to quickly complete
          the featues leaving the look and feel for a later version. So all its
          features are being developed to work as efficient as possible
        </p>
        <p>
          This product is to consider the unavailability/struggle of Internet
          services in some geographical region in Nigeria;{' '}
          <span className="font-bold">So this App runs when it is offline</span>{' '}
          because I IndexDB is leveraged for offline storage.
        </p>
        <p>Really proud of this one, and hope to complete it soon enough</p>
        <span className="font-bold italic">
          {' '}
          enter any username and password to access the DEMO
        </span>
      </div>
    ),
    technologies: [
      'React',
      'Styled-components',
      'Javascript',
      'Redux-Toolkit',
      'Tailwind',
      'IndexDb',
      'Node',
    ],
    links: {
      preview: 'https://priscrption-pharmanager.vercel.app/',
    },
  },
  {
    image: 'https://unsplash-cowrie.netlify.app/favicon.ico',
    title: 'Stock Photos Library',
    description: (
      <div className="space-y-2">
        <p className="font-medium">I played with unsplash's APIs</p>
        <p>
          Toyed with Unsplashe's Apis to create a stock photo library, where you
          can search for stock photos and download.
        </p>
      </div>
    ),
    technologies: [
      'Vue',
      'Styled-components',
      'Monsory Layout Tryout',
      'Unsplash API',
      'Bootstrap',
    ],
    links: {
      preview: 'https://unsplash-cowrie.netlify.app/',
    },
  },

  {
    image: '/projects/robin-logo.svg',
    title: 'Nuxt 3 Dashboard',
    description: (
      <div className="space-y-2">
        <p className="font-medium">Nuxt 3 Dashboard Template</p>
        <p>Toyed with Nuxt 3</p>
      </div>
    ),
    technologies: [
      'Nuxt 3',
      'Styled-components',
      'Typescript',
      'TailwindCss',
      'Responsiveness',
    ],
    links: {
      preview: 'https://robin-dashboard-ag.vercel.app/get-started',
      github: 'https://github.com/ZeeUnltd/robin-dashboard',
    },
  },
  {
    image: '/projects/ag-logo.svg',
    title: 'Web Template',
    description: (
      <div className="space-y-2">
        <p className="font-medium">Web Template Template</p>
      </div>
    ),
    technologies: ['HTML', 'CSS', 'UI', 'Convert to Markup', 'Responsiveness'],
    links: {
      preview: 'https://zeeunltd.github.io/ct_test_app/',
      github: 'https://github.com/ZeeUnltd/ct_test_app',
    },
  },
  {
    image:
      'https://res.cloudinary.com/beam-sensation/image/upload/v1722633871/portfolio/Screenshot_2024-08-02_at_10.23.12_PM_ujnhor.png',
    title: 'Blue Swan Business Page',
    description: (
      <div className="space-y-2">
        <p className="font-medium">
          First Attempt at Wordpress still up since a long time ago! check it
          out 😂.
        </p>
      </div>
    ),
    technologies: ['HTML', 'CSS', 'Wordpress', 'CMS'],
    links: {
      preview: 'http://home.blueswanmarine.com/bsm',
    },
  },
  {
    image: '',
    title: 'Redluxe',
    description: (
      <div className="space-y-2">
        <p className="font-medium">
          An App for a Top Tier users of United Bank For Africa
        </p>
      </div>
    ),
    technologies: ['HTML', 'CSS', 'Squarespace', 'CMS'],
    links: {
      preview: 'https://redluxe.ubagroup.com/',
    },
  },
] as const;

// https://zeeunltd.github.io/ct_test_app/
// http://home.blueswanmarine.com/bsm/contact
// https://nesh-com-ng.squarespace.com/config/settings/domains-email/domains/built-in/nesh-com-ng.squarespace.com
export const experiencesData = [
  {
    title: 'Leatherback',
    location: 'London, UK. (Remote)',
    description: (
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
        <li>
          ● Collaborated with a team of over 20 designers and developers,
          working closely with stakeholders to deliver high-quality,
          user-centric products that met or exceeded all assigned deadlines.{' '}
        </li>
        <li>
          ● Transformed more than 50 design prototypes into fully functional web
          interfaces using HTML, CSS, and JavaScript, TypeScript, Vue and Nuxt,
        </li>
        <li>
          ● Collaborated with a team of more than 10 designers and developers,
          working closely with stakeholders to deliver a high-quality,
          user-centric product that met or exceeded all assigned deadlines.
        </li>
        <li>
          ● Significantly contributed to revenue growth, scaling from $10,000 to
          over $6 million in monthly transactions by completing crucial
          user-facing feature to acheive business goals for the organisation.
        </li>
        <li>
          ● Played an integral role in developing and delivering over 30
          critical business features and modules, pivotal to the successful
          completion of key projects.
        </li>
      </ul>
    ),
    date: '2024 - Present',
  },
  {
    title: 'United Bank For Africa',
    location: 'Marina, Lagos',
    description: (
      // 'During my internship at Chop-Chop, I collaborated with an experienced IT team, focusing on tasks in Next.js. This experience provided valuable insights into teamwork and advanced my proficiency in Next.js.'
      <ul>
        <li>
          ● Revamped the bank's onboarding process, creating a user-friendly
          interface that will benefit over 10 million users while ensuring
          accessibility, internalization and responsitivity across multiple
          devices.
        </li>
        <li>
          ● Created an Internal monitoring dashboard for tracking a significant
          portion (at least 30%) of the forex inflows through Ria Money
          transfers.
        </li>
        <li>
          ● I led and managed the development and design of five major projects,
          implementing a modern front-end infrastructure using Vue.js, a
          JavaScript-centric app framework.
        </li>
        <li>
          ● I provided mentorship and guidance to a team of 10 co-developers as
          they transitioned to front-end development technologies and design.
        </li>
      </ul>
    ),
    date: '2021',
  },
  {
    title: 'Schoolable',
    location: 'V.I, Lagos',
    description: (
      <ul>
        <li>
          ● Successfully launched a flagship finance tool for schools and
          parents, resulting in a notable 35% increase in the customer base.
        </li>
        <li>
          ● Developed a new user-facing feature that improved usability by 60%
          and allows users to track their data in real time
        </li>
        <li>
          ● Translated 100% of UI/UX interfaces into functional mock-ups for
          seamless application development.
        </li>
        <li>
          ● Designed and implemented visual elements for 20+ applications,
          ensuring each featured an attractive and user-friendly interface.
        </li>
        <li>
          ● Comenced and maintained 10+ reusable code libraries, resulting in a
          20% reduction in development time for subsequent projects.
        </li>
        <li>
          ● Played a key role in the redesign of the company's website, aligning
          it with modern specifications and resulting in a 40% increase in user
          engagement.
        </li>
        <li>
          Aced the First 3 month of rigorous tasks and assignments before
          confirmation
        </li>
      </ul>
    ),
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
