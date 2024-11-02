import { AppTable } from '@/components/AppTable';
import React, { useContext } from 'react';
import { SectionDivider } from '@/components/section-divider';
import { Footer } from '@/components/footer';
import { Header } from '@/components/header';
import NavBar from '@/components/ui/navbar';
import { Intro } from '@/components/intro';
import {useActiveSection} from "@/components/active-section-provider"
// useContext(ThemeProviderContext)
import { ThemeToggle } from '@/components/theme-toggle';
interface DashboardProps {
  // Define any props your component might need here
}

const Dashboard: React.FC<DashboardProps> = (props) => {
  const { data } = useContext(useActiveSection);
  return (
    <>
    
      <div className="container flex flex-col items-center">
        <NavBar />
        {/* <Intro /> */}
        <SectionDivider />

        <h1>Dashboard</h1>
        {/* Add your component content here */}
        <AppTable data={data} />
        <Footer />
      </div>
      <ThemeToggle className="fixed bottom-5 right-5 hidden sm:bottom-8 sm:right-8 sm:flex" />
   
    </>
  );
};

export default Dashboard;
