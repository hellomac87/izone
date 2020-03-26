import styled from 'styled-components';
import colors from 'libs/colors';

export const Input = styled.input`
  width: ${(props) => props.width || '100%'};
  height: 30px;
  padding: 0 12px;
  font-size: 14px;
  border: 1px solid gray;
  &:focus {
    outline: none;
    border-color: ${colors.main};
  }
`;
