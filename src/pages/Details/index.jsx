import { Container, Links, Content } from "./styles.js";

import { Header } from "../../components/Header";
import { Button } from "../../components/Button";
import { Section } from "../../components/Section";
import { Tag } from "../../components/Tag";
import { ButtonText } from "../../components/ButtonText";

export function Details() {
  return (
    <Container>
      <Header />

      <main>
        <Content>
          <ButtonText title="Excluir a nota" />

          <h1>
            Introdução ao React
          </h1>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Quo provident laudantium magnam.
            Nam sunt optio earum ad expedita ea perspiciatis, amet nobis.
            Assumenda a debitis dolore, quaerat deserunt ex id.
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Voluptates obcaecati molestias non amet eius odio recusandae molestiae
            commodi sapiente ipsa laboriosam quos minima eligendi, porro itaque, reiciendis,
            qui atque dolor? Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Molestiae corrupti, explicabo facilis repellendus odit laudantium velit porro
            impedit quos fuga repudiandae quas iste ratione voluptatibus earum vitae maxime quia quis!
          </p>

          <Section title="Links úteis">
            <Links>
              <li><a href="#">https://www.rocketseat.com.br/</a></li>
              <li><a href="#">https://www.rocketseat.com.br/</a></li>
            </Links>
          </Section>

          <Section title="Marcadores">
            <Tag title="express" />
            <Tag title="nodejs" />
          </Section>

          <Button title="Voltar" />
        </Content>
      </main>
    </Container>
  )
}