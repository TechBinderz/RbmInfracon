import Footer from './Footer';
import Header from './Header'
import { Outlet } from 'react-router-dom'
import ScrollToTop from './router/ScrollToTop';

function App() {
  return (
    <>
      <Header />
      <ScrollToTop />
      <Outlet />
      <Footer />
    </>
  );
}

export default App
