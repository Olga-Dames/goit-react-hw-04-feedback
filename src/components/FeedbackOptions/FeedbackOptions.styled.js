import styled from '@emotion/styled';

export const Box = styled.div`
  margin-bottom: 40px;
  display: flex;
  gap: 50px;
`;

export const Button = styled.button`
  display: block;
  padding: 10px 25px;
  border-radius: 5px;
  background-color: #ff6347;
  border: none;
  font-size: 24px;
  color: white;
  font-weight: bold;
  outline: transparent;
  transform: scale(1);
  transition: background-color 250ms linear, transform 250ms linear;

  &:hover {
    background-color: #008a98;
    transform: scale(1.15)
  }
`;
