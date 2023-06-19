import styled from 'styled-components';

export const ButtonContainer = styled.button`
    padding: 20px;
    border: 1px solid #CDCDCD;
    background-color: #00AAF0;
    color: #FFFFFF;
    font-size: 24px;
    font-weight: 700;
    flex: 1;
   &.double{
     flex-basis: calc(36% - 38px);
   }
  &.triple{
    flex-basis: calc(61% - 38px);
  }
  
    &:hover {
        opacity: 0.6;
    }
`