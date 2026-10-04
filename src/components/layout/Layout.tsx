import React from 'react';
import { Outlet } from 'react-router';
import { Sidebar } from './Sidebar';
import { Header } from './Header';
import { MobileNav } from './MobileNav';
import { AmbientBackground } from '../common/AmbientBackground';

export const Layout: React.FC = () => {
  return (
    <div className="min-h-screen text-foreground flex flex-row relative selection:bg-primary selection:text-primary-foreground">

      <AmbientBackground />


      <Sidebar />


      <div className="flex-1 flex flex-col min-w-0 pb-20 lg:pb-0">
        <Header />
        <main className="flex-1 p-4 md:p-8 lg:p-10 max-w-6xl mx-auto w-full relative z-10">
          <Outlet />
        </main>
      </div>


      <MobileNav />
    </div>
  );
};
