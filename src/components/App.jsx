import { Routes, Route } from 'react-router-dom';
import { lazy } from 'react';
import { SharedLayout } from '../pages/SharedLayout/SharedLayout';

// import { HomePage } from '../pages/HomePage/HomePage';
// import HomePage from '../pages/HomePage/HomePage';

// import { MoviesPage } from '../pages/MoviesPage/MoviesPage';

const HomePage = lazy(() => import('pages/HomePage/HomePage'));
const MoviesPage = lazy(() => import('pages/MoviesPage/MoviesPage'));
// const MoviesPage = lazy(() => import('../pages/MoviesPage/MoviesPage'));

// let MoviesPage;
// try {
//   MoviesPage = lazy(() => import('../pages/MoviesPage/MoviesPage'));
// } catch (error) {
//   console.error('Error importing MoviesPage:', error);
// }

// const Cast = lazy(() => import(''));
// const Reviews = lazy(() => import(''));
// const MovieDetailsPage = lazy(() =>
//   import('../pages/MovieDetailsPage/MovieDetailsPage')
// );

export const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<HomePage />} />
          <Route path="movies" element={<MoviesPage />} />
          {/* <Route path="/movies/:movieId" element={<MovieDetailsPage />}> */}
          {/* <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} /> */}
          {/* </Route> */}
          <Route path="/*" element={<HomePage />} />
        </Route>
      </Routes>
    </div>
  );
};
