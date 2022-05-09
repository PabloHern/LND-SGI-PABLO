import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import { Row } from 'reactstrap';
const myInfo = [
  {
    src: "/img/eduinfo.png",
    text: "El proyecto Sabios Guías Intérpretes pretende acercarse aun más a la población juvenil a través del Programa enSeñas con el objetivo de incorporar de manera integral nuestros valores históricos, culturales y patrimoniales a la práctica educativa, entendida en su generalidad: formal, no formal e informal."
  }, {
    src: "/img/guiainfo.png",
    text: "Te proponemos una nueva forma de recorrer nuestros pueblos y municipios. De la mano de nuestros mayores podrás vivir de primera mano los usos originales de los lugares de interés y sus vivencias de antaño. Disfruta de la Naturaleza y también de la Historia."
  }, {
    src: "/img/vidainfo.png",
    text: "Vidas Sabias nace con el objetivo de fomentar la recopilación audiovisual del patrimonio cultural inmaterial que las personas de Canarias nos aportan. Un reconocimiento al valor del saber popular y que no está escrito. Necesario para conocer y entender la riqueza cultural que nos rodea."
  },
];
export default function Info() {
  return (
        <Container>
          <Row>
          {myInfo.map((item) =>
            <Col>
              <img src={item.src} />
              <p>{item.text}</p>
            </Col>
          )}
          </Row>
        </Container>
  );
}