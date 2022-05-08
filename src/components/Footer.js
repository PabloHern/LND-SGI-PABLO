
import React from "react";
import {
  Box,
  Container,
  Row,
  Column,
  FooterLink,
  Heading,
} from "./FooterStyles";

const Footer = () => {
  return (
    <Box>
      <h1 style={{
        color: "green",
        textAlign: "center",
        marginTop: "-50px",
        backgroundColor: "white",
        opacity: "0.75",
        marginLeft: "550px",
        marginRight: "550px"
      }}>
        Sabios Guías Intérpretes
      </h1>
      <Container>
        <Row>
          <Column>
          </Column>
          <Column>
            <Heading>Contacte con nosotros</Heading>
            <FooterLink href="https://www.sabiosguiasinterpretes.com/">Sabios Guías Intérpretes</FooterLink>
            <FooterLink href="https://www.fundacionlidiagarcia.org/">Fundación Lidia García </FooterLink>
            <FooterLink href="https://www.gobiernodecanarias.org/principal/">Gobierno de Canarias</FooterLink>
          </Column>
          <Column>
            <Heading>Redes Sociales</Heading>
            <FooterLink href="https://www.youtube.com/channel/UCsXpM6GoxhFjlGDTyEZ4q8A">
              <i className="fab fa-youtube">
                <span style={{ marginLeft: "10px" }}>
                  Youtube
                </span>
              </i>
            </FooterLink>
          </Column>
        </Row>
      </Container>
    </Box>
  );
};
export default Footer;