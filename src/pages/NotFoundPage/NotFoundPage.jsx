import { Link } from 'react-router-dom';

export const NotFoundPage = () => {
  return (
    <>
      <h2>Not Found</h2>
      <Link to={'/'}>Back to main</Link>
    </>
  );
};
