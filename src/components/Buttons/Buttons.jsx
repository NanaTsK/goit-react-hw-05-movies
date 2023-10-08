import { GoBackContainer, GoBackLink } from './Buttons.styled';
import { useLocation } from 'react-router-dom';
import { TbArrowBack } from 'react-icons/tb';

const GoBackBtn = () => {
  const location = useLocation();
  const backLinkHref = location.state?.from ?? '/';

  return (
    <GoBackContainer>
      <GoBackLink to={backLinkHref}>
        <TbArrowBack />
        <span>Go back</span>
      </GoBackLink>
    </GoBackContainer>
  );
};

export default GoBackBtn;
