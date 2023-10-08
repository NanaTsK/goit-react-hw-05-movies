import { Routes, Route } from 'react-router-dom';
import { lazy } from 'react';
import { SharedLayout } from '../pages/SharedLayout/SharedLayout';

const HomePage = lazy(() => import('pages/HomePage/HomePage'));
const MoviesPage = lazy(() => import('pages/MoviesPage/MoviesPage'));
const MovieDetailsPage = lazy(() =>
  import('pages/MovieDetailsPage/MovieDetailsPage')
);
const Cast = lazy(() => import('components/Cast/Cast'));
// const Reviews = lazy(() => import(''));

export const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<HomePage />} />
          <Route path="movies" element={<MoviesPage />} />
          <Route path="movies/:movieId" element={<MovieDetailsPage />}>
            <Route path="cast" element={<Cast />} />
            {/* <Route path="reviews" element={<Reviews />} /> */}
          </Route>
          <Route path="/*" element={<HomePage />} />
        </Route>
      </Routes>
    </div>
  );
};
