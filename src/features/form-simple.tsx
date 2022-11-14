import * as yup from 'yup';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { Form, Button, Row, Col } from '@/design-system';

const defaultValues = {
  username: '',
  email: '',
  password: '',
  first: '',
  second: '',
  third: '',
  fourth: '',
};

const schema = yup.object().shape({
  username: yup.string().min(1, 'обязательное поле'),
  email: yup.string().email().required('обязательное поле'),
  password: yup
    .string()
    .min(6, 'длинна пароля не может быть меньше 6-и символов'),
  first: yup.string().required(),
  second: yup.string().required(),
  third: yup.string().required(),
  fourth: yup.string().required(),
});

type FormValues = typeof defaultValues;

export const FormSimple = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues,
    resolver: yupResolver(schema),
  });

  const onSubmit = (data: FormValues) => {
    console.log('data', data);
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Form.Group controlId="username">
        <Form.Input
          type="text"
          placeholder="Имя пользователя"
          hint={errors?.username?.message}
          withError={!!errors?.username}
          {...register('username')}
        />
      </Form.Group>
      <Form.Group controlId="email">
        <Form.Input
          type="email"
          placeholder="Email"
          hint={errors?.email?.message}
          withError={!!errors?.email}
          {...register('email')}
        />
      </Form.Group>

      <Row>
        <Form.Group as={Col}>
          <Form.Input
            placeholder="first"
            hint={errors?.first?.message}
            withError={!!errors?.first}
            {...register('first')}
          />
        </Form.Group>
        <Form.Group as={Col}>
          <Form.Input
            placeholder="second"
            hint={errors?.second?.message}
            withError={!!errors?.second}
            {...register('second')}
          />
        </Form.Group>
      </Row>

      <Row>
        <Form.Group as={Col}>
          <Form.Input
            placeholder="third"
            hint={errors?.third?.message}
            withError={!!errors?.third}
            {...register('third')}
          />
        </Form.Group>
        <Form.Group as={Col}>
          <Form.Input
            placeholder="fourth"
            hint={errors?.fourth?.message}
            withError={!!errors?.fourth}
            {...register('fourth')}
          />
        </Form.Group>
      </Row>

      <Button type="submit">Отправить</Button>
    </Form>
  );
};
