import { Routes, Route } from 'react-router-dom';
import { SharedLayout } from '../pages/SharedLayout/SharedLayout';

// import Home from 'path/to/pages/Home';
// import About from 'path/to/pages/About';
// import Products from 'path/to/pages/Products';
// import { NotFoundPage } from '../pages/NotFoundPage/NotFoundPage';
// import { NotFoundPage } from '../pages/NotFoundPage/NotFoundPage';

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
          {/* <Route index element={<Home />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/movies/:movieId" element={<MovieDetailsPage />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
          <Route path="*" element={<NotFoundPage />} /> */}
        </Route>
      </Routes>
    </div>
  );
};
