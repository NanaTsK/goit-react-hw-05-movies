// import { ButtonUp } from 'components/ButtonUp';
import { Header } from 'components/Header/Header';
import { Suspense } from 'react';
// import { Loader } from 'components/Loader/Loader';
import { Outlet } from 'react-router-dom';
import { Footer } from 'components/Footer/Footer';

export const SharedLayout = () => {
  return (
    <>
      <Header />
      {/* <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense> */}
      <Suspense>
        <Outlet />
      </Suspense>
      {/* <ButtonUp /> */}
      <Footer />
    </>
  );
};
