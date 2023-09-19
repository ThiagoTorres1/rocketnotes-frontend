import {Container, Links} from "./styles.js"
import { Header } from "../../components/Header"
import { Section } from "../../components/Section"
import { Button } from "../../components/Button"

export function Details() {
  
  return(
    <Container>
      <Header></Header>
      <Section title="Links úteis">
        <Links>
          <li><a href="#">https://www.rocketseat.com.br/</a></li>
          <li><a href="#">https://www.rocketseat.com.br/</a></li>          
        </Links>
      </Section>
      <Section title="Marcadores">

      </Section>
      <Button title="Voltar"/>
    </Container>
  )
}