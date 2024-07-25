import styled, { keyframes } from "styled-components";
import { BiLoaderAlt } from "react-icons/bi";

const rotate = keyframes`
  to {
    transform: rotate(1turn)
  }
`;

const StyledContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.8rem;
`;

const StyledSpinnerMini = styled(BiLoaderAlt)`
  width: 2.4rem;
  height: 2.4rem;
  animation: ${rotate} 1.5s infinite linear;
`;

function SpinnerMini({ text }) {
  if (!text) return <StyledSpinnerMini />;

  return (
    <StyledContainer>
      <StyledSpinnerMini />
      <span>{text}</span>
    </StyledContainer>
  );
}

export default SpinnerMini;
