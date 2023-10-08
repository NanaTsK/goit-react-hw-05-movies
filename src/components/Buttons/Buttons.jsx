import { MovieLink } from './Buttons.styled';
import { useLocation } from 'react-router-dom';
import { TbArrowBack } from 'react-icons/tb';

const GoBackBtn = () => {
  const location = useLocation();
  const backLinkHref = location.state?.from ?? '/';

  return (
    <MovieLink to={backLinkHref}>
      <TbArrowBack />
      <span>Go back</span>
    </MovieLink>
  );
};

export default GoBackBtn;

// const backLinkRef = useRef(location.state?.from ?? '/movies');

// const handleBackToList = () => {
//   navigate(backLinkRef.current);
// };
// <BackButton onClick={handleBackToList}>
//   <span>◀</span>
//   <span>Go back</span>
// </BackButton>;
