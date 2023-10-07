import { MovieLink } from './Buttons.styled';

import { BiArrowBack } from 'react-icons/bi';
import { useLocation } from 'react-router-dom';

export const GoBackBtn = () => {
  const location = useLocation();
  const backLinkHref = location.state?.from ?? '/';

  return (
    <MovieLink to={backLinkHref}>
      <BiArrowBack />
      <span>Go back</span>
    </MovieLink>
  );
};

// const backLinkRef = useRef(location.state?.from ?? '/movies');

// const handleBackToList = () => {
//   navigate(backLinkRef.current);
// };
// <BackButton onClick={handleBackToList}>
//   <span>◀</span>
//   <span>Go back</span>
// </BackButton>;
