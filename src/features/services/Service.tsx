import React from "react";
import { useLocation, Outlet } from 'react-router-dom';
import PageTitle from '../common/PageTitleDiv';

const Services: React.FC = () => {
  const { pathname } = useLocation();

  const ServicesPage: React.FC = () => (
    <PageTitle 
      imageUrl='https://picsum.photos/1920/1080' 
      tileContent='Services' 
    />
  );

  const MoreServices: React.FC = () => <Outlet />;

  return (
    <>
      {pathname === "/services" ? <ServicesPage /> : <MoreServices />}
    </>
  );
};

export default Services;
