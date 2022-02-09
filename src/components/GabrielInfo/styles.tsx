import styled from 'styled-components'


export const Container = styled.div`
  margin-top: 3%;
  display: flex;
  align-items: center;
  flex-direction: column;

  background-repeat: no-repeat;
`;

export const Image = styled.img`
  width: 20%;
  height: 20%;
  
  border-radius: 50%;
  border: 2px solid white;
  align-self: center;

  color: #014a77;
`;

export const MyBio = styled.span`
  display: flex;
  margin-top: 2%;
  align-self: center;
  max-width: 50%;
  font-size: 20px;

  color: #014a77;
`;