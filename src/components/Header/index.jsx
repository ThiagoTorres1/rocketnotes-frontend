import { Container, Profile } from "./styles";

export function Header() {
  return(
    <Container>
      <Profile>
        <img 
          src="https://github.com/thiagotorres1.png" 
          alt="Foto do usuário" 
        />
        <div>
          <span>Bem-vindo</span>
          <strong>Thiago Torres</strong>
        </div>
      </Profile>
    </Container>
  )
}