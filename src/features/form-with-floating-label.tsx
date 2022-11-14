import * as yup from 'yup';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { Form, Button } from '@/design-system';

const defaultValues = {
  username: '',
  email: '',
  password: '',
  text: '',
};

const schema = yup.object().shape({
  username: yup.string().min(1, 'обязательное поле'),
  email: yup.string().email().required('обязательное поле'),
  password: yup
    .string()
    .min(6, 'длинна пароля не может быть меньше 6-и символов'),
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
      <Form.FloatingLabel controlId="username" text="Имя пользователя">
        <Form.Input
          type="text"
          placeholder="Имя пользователя"
          hint={errors?.username?.message}
          withError={!!errors?.username}
          {...register('username')}
        />
      </Form.FloatingLabel>
      <Form.FloatingLabel controlId="email" text="Email">
        <Form.Input
          type="email"
          placeholder="Email"
          hint={errors?.email?.message}
          withError={!!errors?.email}
          {...register('email')}
        />
      </Form.FloatingLabel>

      <Form.FloatingLabel text="Password" controlId="username">
        <Form.Input
          type="password"
          placeholder="password"
          hint={errors?.password?.message}
          withError={!!errors?.password}
          {...register('password')}
        />
      </Form.FloatingLabel>

      <Button type="submit">Отправить</Button>
    </Form>
  );
};
