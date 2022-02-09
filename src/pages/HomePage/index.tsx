import React, { useState } from 'react';
import { 
  Container,
  Header,
  Title,
  SubTitle,
} from './styles';

import GabrielInfo from '../../components/GabrielInfo';
import MenuBar from '../../components/MenuBar';

interface MenuOptions {
  option: string;
}

const HomePage: React.FC = () => {
  const [option, setOption] = useState<MenuOptions>()

  return (
    <Container>
      <MenuBar />

      <Header>
        <Title>Gabriel Martins</Title>
        <SubTitle>Desenvolvedor FullStack em treinamento...</SubTitle>
      </Header>

      <GabrielInfo />

    </Container>
  );
}

export default HomePage;
