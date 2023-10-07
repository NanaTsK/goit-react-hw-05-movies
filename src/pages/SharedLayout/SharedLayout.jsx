import { Header } from 'components/Header/Header';
import { Suspense } from 'react';
import { Loader } from 'components/Loader/Loader';
import { Outlet } from 'react-router-dom';
import { Footer } from 'components/Footer/Footer';
// import { layout } from './SharedLayout.styled'

export const SharedLayout = () => {
  return (
    <div className="layout">
      <Header />
      <Suspense fallback={<Loader />}>
        <div className="content">
          <Outlet />
        </div>
      </Suspense>
      <Footer className="footer" />
      {/* <Footer /> */}
    </div>
  );
};
