import Dashboard from './dashboard/page';
import { ThemeToggle } from '@/components/theme-toggle';

const Home = async () => {
  // const starsCount = await Promise.all(
  //   projectsData.map(async ({ links }) => {
  //     const res = await fetch(links.githubApi, { cache: 'no-store' });
  //     const data = await res.json();
  //     return data.stargazers_count;
  //   })
  // );

  return (
    <>
      <Dashboard />
      <ThemeToggle className="fixed bottom-5 right-5 hidden sm:bottom-8 sm:right-8 sm:flex" />
    </>
  );
};

export default Home;
