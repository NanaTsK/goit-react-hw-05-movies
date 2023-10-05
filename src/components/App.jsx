import { Routes, Route } from 'react-router-dom';
// import { lazy } from 'react';
import { SharedLayout } from '../pages/SharedLayout/SharedLayout';

import { HomePage } from '../pages/HomePage/HomePage'; // Import the HomePage component
import { MoviesPage } from '../pages/MoviesPage/MoviesPage'; // Import the MoviesPage component

// const HomePage = lazy(() => import('../pages/HomePage/HomePage'));
// const MoviesPage = lazy(() => import('../pages/MoviesPage/MoviesPage'));

// const Cast = lazy(() => import(''));
// const Reviews = lazy(() => import(''));
// const MovieDetailsPage = lazy(() =>
//   import('../pages/MovieDetailsPage/MovieDetailsPage')
// );
// const NotFoundPage = lazy(() => import('../pages/NotFoundPage/NotFoundPage'));

export const App = () => {
  return (
    <div>
      {/* <button
        style={{
          display: 'flex',
          fontSize: 40,
          color: '#010101',
        }}
      >
        HOME / START
      </button> */}
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<HomePage />} />
          <Route path="/movies" element={<MoviesPage />} />
          {/* <Route path="/movies/:movieId" element={<MovieDetailsPage />}> */}
          {/* <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} /> */}
          {/* </Route> */}
          {/* <Route path="*" element={<NotFoundPage />} /> */}
        </Route>
      </Routes>
    </div>
  );
};
