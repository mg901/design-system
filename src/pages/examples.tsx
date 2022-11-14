import { Text, Form, Button, Box } from '@/ui-kit';

import 'normalize.css';
import './ui-kit/main.scss';

const variants = [
  'primary',
  'secondary',
  'success',
  'danger',
  'warning',
] as const;

export const App = () => (
  <>
    <Text as="h1">Friendly UI Kit</Text>
    <div>
      <Text as="strong">strong text</Text>
      <Text as="p">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Labore aperiam
        libero laudantium repellat sequi vel nobis laboriosam, esse vero eos id
        neque fugiat, et nesciunt cupiditate fuga numquam quam obcaecati.
      </Text>

      <Text as="h2">Text Weight</Text>
      <Text as="p">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odit placeat
        illum itaque officia sint aperiam voluptate neque reprehenderit, impedit
        voluptatem, delectus tenetur! Sit saepe dolore deleniti molestiae
        praesentium earum optio.
      </Text>
      <Text as="p" weight="medium">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellendus
        iure, impedit perspiciatis non maiores, iste illo dignissimos temporibus
        ratione, excepturi quo beatae soluta. Fugiat aspernatur cumque at
        cupiditate quam excepturi.
      </Text>
      <Text as="p">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ducimus
        aliquid obcaecati quaerat? Id sed laudantium exercitationem ipsum
        consectetur eum alias non a voluptatem. Vel obcaecati accusamus
        repellendus expedita possimus nulla.
      </Text>

      <Text as="h2">Text Size</Text>
      <Text as="p">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odit placeat
        illum itaque officia sint aperiam voluptate neque reprehenderit, impedit
        voluptatem, delectus tenetur! Sit saepe dolore deleniti molestiae
        praesentium earum optio.
      </Text>
      <Text as="p">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellendus
        iure, impedit perspiciatis non maiores, iste illo dignissimos temporibus
        ratione, excepturi quo beatae soluta. Fugiat aspernatur cumque at
        cupiditate quam excepturi.
      </Text>
      <Text as="p" variant="sm">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ducimus
        aliquid obcaecati quaerat? Id sed laudantium exercitationem ipsum
        consectetur eum alias non a voluptatem. Vel obcaecati accusamus
        repellendus expedita possimus nulla.
      </Text>

      <Text as="p" variant="xs">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Pariatur sit
        minus voluptate accusamus. Optio, vel debitis. Obcaecati harum doloribus
        id, illo earum qui consequuntur eveniet, ex nam explicabo aliquam quam.
      </Text>
    </div>

    <br />

    <Text as="h2">Form</Text>
    <Form>
      <fieldset>
        <Form.Label as="legend">form label as legend</Form.Label>

        <Form.Group controlId="example-email">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
          <Form.Text as="small">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group controlId="example-password">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>

        <Form.Group controlId="example-text">
          <Form.Label>Some Text</Form.Label>
          <Form.Control as="textarea" rows={4} placeholder="Password" />
        </Form.Group>

        <Form.Group controlId="example-checkbox">
          <Form.Control type="checkbox" />
          <Form.Label>Check me</Form.Label>
        </Form.Group>
      </fieldset>

      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
    <br />
    <br />
    <br />

    <Text as="h2">Box</Text>
    <Text as="h3">Box with color</Text>
    <Box color="success">
      <Text as="p">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Labore aperiam
        libero laudantium repellat sequi vel nobis laboriosam, esse vero eos id
        neque fugiat, et nesciunt cupiditate fuga numquam quam obcaecati.
      </Text>
    </Box>

    <Text as="h3">Box align</Text>
    <Box align="center">
      <Text as="p">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Labore aperiam
        libero laudantium repellat sequi vel nobis laboriosam, esse vero eos id
        neque fugiat, et nesciunt cupiditate fuga numquam quam obcaecati.
      </Text>
    </Box>

    <Box align="right">
      <Text as="p">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Labore aperiam
        libero laudantium repellat sequi vel nobis laboriosam, esse vero eos id
        neque fugiat, et nesciunt cupiditate fuga numquam quam obcaecati.
      </Text>
    </Box>

    <Text as="h1" color="primary">
      h1 Heading
    </Text>
    <Text as="h2" color="secondary">
      h2 Heading
    </Text>
    <Text as="h3" color="success">
      h3 Heading
    </Text>
    <Text as="h4" color="warning">
      h4 Heading
    </Text>
    <Text as="h5" color="danger">
      h5 Heading
    </Text>
    <Text as="h6">h6 Heading </Text>
    <br />
    <br />
    <br />

    <Text as="h2">Buttons</Text>
    {variants.map((variant) => (
      <Button variant={variant}>{variant}</Button>
    ))}

    <Text as="h3">Outlined</Text>
    {variants.map((variant) => (
      <Button variant={`${variant}-outline`}>{variant}</Button>
    ))}

    <Text as="h3">Button as link</Text>
    <Button as="a" variant="link">
      Link to
    </Button>
  </>
);
