import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
  display: grid;
  align-items: center;
  justify-content: center;
  height: 60px;
  margin-bottom: 40px;
`;

const ButtonText = styled.p`
  font-weight: 600;
  font-size: 1.2em;
  text-transform: uppercase;
  letter-spacing: 2px;
  border: 1.5px solid #ddd;
  padding: 15px 70px;
  cursor: pointer;
`

export { Container, ButtonText }