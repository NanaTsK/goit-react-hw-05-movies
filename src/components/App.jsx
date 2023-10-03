// import { Routes, Route } from 'react-router-dom';
import { Routes } from 'react-router-dom';

// import Home from 'path/to/pages/Home';
// import About from 'path/to/pages/About';
// import Products from 'path/to/pages/Products';

export const App = () => {
  return (
    <div>
      <button
        style={{
          display: 'flex',
          fontSize: 40,
          color: '#010101',
        }}
      >
        HOME / START
      </button>
      <Routes>
        {/* <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<Products />} /> */}
      </Routes>
    </div>
  );
};
