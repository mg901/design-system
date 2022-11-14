/* eslint @typescript-eslint/no-use-before-define: 0 */
import { useState } from 'react';
import { PageTemplate } from './ui/page-template';
import { Row, Col, Form, Box, Button, Text } from '@/design-system';

const BrokenFormPage = () => {
  return (
    <PageTemplate title="">
      <Form>
        <Box as="fieldset">
          <Row>
            <Col xs="8">
              <Form.FloatingLabel text="ФИО ответственного по документу">
                <Form.Input placeholder="ФИО ответственного по документу" />
              </Form.FloatingLabel>
            </Col>
            <Col xs="4">
              <Form.FloatingLabel text="Телефон">
                <Form.Input placeholder="Телефон" />
              </Form.FloatingLabel>
            </Col>
          </Row>
          <TopBlock />
        </Box>

        <Text as="h2">Перевод</Text>
        <Box as="fieldset" mb={40}>
          <Form.FloatingLabel text="Банк">
            <Form.Input placeholder="Банк" />
          </Form.FloatingLabel>
          <Form.FloatingLabel text="Счёт зачисления">
            <Form.Input
              placeholder="Счёт зачисления"
              hint="Счёт должен пренадлежать вашей организации, иначе, деньги не зачисляться"
            />
          </Form.FloatingLabel>
          <Row>
            <Col>
              <Form.FloatingLabel text="Процент">
                <Form.Input placeholder="Процент" />
              </Form.FloatingLabel>
            </Col>
            <Col>
              <Form.Group>
                <Form.Input />
              </Form.Group>
            </Col>
          </Row>
        </Box>

        <Box as="fieldset">
          <Form.FloatingLabel text="Счёт зачисления">
            <Form.Input placeholder="Счёт зачисления" />
          </Form.FloatingLabel>
          <Row>
            <Col>
              <Form.FloatingLabel text="Процент">
                <Form.Input placeholder="Процент" />
              </Form.FloatingLabel>
            </Col>
            <Col>
              <Form.Group>
                <Form.Input />
              </Form.Group>
            </Col>
          </Row>
        </Box>
      </Form>
    </PageTemplate>
  );
};

export default BrokenFormPage;

function TopBlock() {
  const [state, toggle] = useState(false);

  const handleToggle = () => {
    toggle((prevState) => !prevState);
  };

  return (
    <>
      <Row>
        <Col xs="10">
          <Form.FloatingLabel text="Уведомление о зачислении средств">
            <Form.Input placeholder="Уведомление о зачислении средств" />
          </Form.FloatingLabel>
        </Col>
        <Col xs="2">
          <Button onClick={handleToggle}>
            {state ? 'Выбрать из списка' : 'Заполнить вручную'}
          </Button>
        </Col>
      </Row>
      {state && (
        <Row>
          <Col xs="2">
            <Form.FloatingLabel text="№">
              <Form.Input placeholder="№" />
            </Form.FloatingLabel>
          </Col>
          <Col xs="4">
            <Form.FloatingLabel text="Дата уведомления">
              <Form.Input placeholder="Дата уведомления" />
            </Form.FloatingLabel>
          </Col>
          <Col xs="6">
            <Form.Group>
              <Form.Input />
            </Form.Group>
          </Col>
        </Row>
      )}
    </>
  );
}
