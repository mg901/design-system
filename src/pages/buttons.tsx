import {
  Box,
  Stack,
  Text,
  Button,
  ButtonCircle,
  IconClose,
} from '@/design-system';

const ButtonsPage = () => {
  return (
    <Box px={20}>
      <Text as="h1" variant="h3">
        Кнопки
      </Text>

      <Stack gap={24}>
        <Stack direction="horizontal" gap={16}>
          <ButtonCircle>
            <IconClose size="lg" />
          </ButtonCircle>
        </Stack>

        <Stack direction="horizontal" gap={16}>
          <Button variant="neutral">Копировать</Button>
          <Button variant="neutral" disabled>
            Копировать
          </Button>
        </Stack>

        <Stack direction="horizontal" gap={16}>
          <Button>Далее</Button>
          <Button disabled>Далее</Button>
        </Stack>

        <Stack direction="horizontal" gap={16}>
          <Button variant="secondary">Назад</Button>
          <Button variant="secondary" disabled>
            Назад
          </Button>
        </Stack>

        <Stack direction="horizontal" gap={16}>
          <Button variant="danger">Удалить</Button>
          <Button variant="danger" disabled>
            Удалить
          </Button>
        </Stack>

        <Stack direction="horizontal" gap={16}>
          <Button variant="warning">Редактировать</Button>
          <Button variant="warning" disabled>
            Редактировать
          </Button>
        </Stack>

        <Stack direction="horizontal" gap={16}>
          <Button variant="neutral">Копировать</Button>
          <Button>primary</Button>
          <Button variant="secondary" mr="auto">
            secondary
          </Button>
          <Button variant="danger">danger</Button>
          <Button variant="warning">warning</Button>
        </Stack>

        <Stack direction="horizontal" gap={16}>
          <Button variant="neutral">Копировать</Button>
          <Button>primary</Button>
          <Button variant="secondary">secondary</Button>
          <Button variant="danger">danger</Button>
          <Button variant="warning" ml="auto">
            warning
          </Button>
        </Stack>

        <Stack direction="horizontal" gap={16}>
          <Button variant="neutral">Копировать</Button>
          <Button>primary</Button>
          <Button variant="secondary" mx="auto">
            secondary
          </Button>
          <Button variant="danger">danger</Button>
          <Button variant="warning">warning</Button>
        </Stack>
      </Stack>
    </Box>
  );
};

export default ButtonsPage;
