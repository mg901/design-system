import { Row, Col, Text } from '@/design-system';

export const GridColumns = () => {
  return (
    <>
      <Row mb={40}>
        <Col>Column</Col>
        <Col>Column</Col>
        <Col>Column</Col>
      </Row>

      <Text as="h2">Автоматически настраиваемые колонки</Text>
      <Row mb={20}>
        <Col>Column</Col>
        <Col>Column</Col>
      </Row>
      <Row mb={40}>
        <Col>Column</Col>
        <Col>Column</Col>
        <Col>Column</Col>
        <Col>Column</Col>
      </Row>

      <Text as="h2">Настройка ширины одного столбца</Text>
      <Row mb={20}>
        <Col>Column</Col>
        <Col xs="6">Column</Col>
        <Col>Column</Col>
      </Row>

      <Row mb={40}>
        <Col>Column</Col>
        <Col xs="4">Column</Col>
        <Col>Column</Col>
      </Row>

      <Text as="h2">Ширины под контент</Text>
      <Row mb={40}>
        <Col>Column</Col>
        <Col xs="auto">Контент разной ширины</Col>
        <Col>Column</Col>
      </Row>

      <Text as="h2">Подстройка под контент</Text>
      <Row mb={40}>
        <Col sm="6" md="2" lg="5" xl="6" xxl="3">
          Column
        </Col>
        <Col sm="3" md="8" lg="2" xl="3" xxl="6">
          Column
        </Col>
        <Col sm="3" md="2" lg="5" xl="3" xxl="3">
          Column
        </Col>
      </Row>

      <Text as="h2">Вариации различной длины</Text>
      <Row>
        <Col>1</Col>
        <Col xs="11">11</Col>
      </Row>

      <Row>
        <Col xs="2">2</Col>
        <Col xs="10">10</Col>
      </Row>

      <Row>
        <Col xs="3">3</Col>
        <Col xs="9">9</Col>
      </Row>

      <Row>
        <Col xs="4">4</Col>
        <Col xs="8">8</Col>
      </Row>

      <Row>
        <Col xs="5">5</Col>
        <Col xs="7">7</Col>
      </Row>

      <Row>
        <Col xs="6">6</Col>
        <Col xs="6">6</Col>
      </Row>
      <Row>
        <Col>1</Col>
        <Col>1</Col>
        <Col>1</Col>
        <Col>1</Col>
        <Col>1</Col>
        <Col>1</Col>
        <Col>1</Col>
        <Col>1</Col>
        <Col>1</Col>
        <Col>1</Col>
        <Col>1</Col>
        <Col>1</Col>
      </Row>

      <Row>
        <Col xs="2">2</Col>
        <Col xs="2">2</Col>
        <Col xs="2">2</Col>
        <Col xs="2">2</Col>
        <Col xs="2">2</Col>
        <Col xs="2">2</Col>
      </Row>

      <Row>
        <Col xs="3">3</Col>
        <Col xs="3">3</Col>
        <Col xs="3">3</Col>
        <Col xs="3">3</Col>
      </Row>

      <Row>
        <Col xs="4">4</Col>
        <Col xs="4">4</Col>
        <Col xs="4">3</Col>
      </Row>
    </>
  );
};
