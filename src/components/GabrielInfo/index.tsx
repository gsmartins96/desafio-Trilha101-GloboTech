import React from 'react'

import { 
  Container,
  Image,
  MyBio
} from './styles'

const GabrielInfo: React.FC = () => {
  return (
    <Container>
      <Image src='https://avatars.githubusercontent.com/u/27238183?v=4' alt='Gabriel Martins' />

      <MyBio>
        Me chamo Gabriel Martins, atualmente estudante de Ciência da Computação e trabalhando com
        desenvolvimento Web/Mobile a quase 1 ano. 
        <br /> <br />
        Deveria ter uma Bio bem dinamica aqui mas não deu tempo de "enfeitar" a bio e os demais menus.
      </MyBio>
    </Container>
  )
}

export default GabrielInfo;
