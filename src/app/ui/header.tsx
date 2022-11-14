import { Link } from 'react-router-dom';
import { Container, Row, Col } from '@/design-system';
import { CONFIG } from '@/app/config';

export const Header = () => {
  return (
    <Container as="header" fluid>
      <Row py={28}>
        <Col as={Link} to={CONFIG.HOME.LINK} pl={36} className="col-1">
          Home
        </Col>
      </Row>
    </Container>
  );
};
