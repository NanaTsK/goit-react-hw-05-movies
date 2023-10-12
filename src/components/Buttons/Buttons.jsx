import { GoBackContainer, GoBackLink } from './Buttons.styled';
import { useLocation } from 'react-router-dom';
import { useRef } from 'react';
import { TbArrowBack } from 'react-icons/tb';

const GoBackBtn = () => {
  const location = useLocation();
  console.log('location: ', location);
  // const backLinkHref = location.state?.from ?? '/';
  const backLinkHref = useRef(location.state?.from ?? '/');

  return (
    <GoBackContainer>
      <GoBackLink to={backLinkHref.current}>
        <TbArrowBack />
        <span>Go back</span>
      </GoBackLink>
    </GoBackContainer>
  );
};

export default GoBackBtn;
