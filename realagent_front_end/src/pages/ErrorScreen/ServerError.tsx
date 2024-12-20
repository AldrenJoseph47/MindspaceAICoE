import { Title, Text, Button, Container, Group } from '@mantine/core';
import classes from './Error.module.css';

export default function ServerError() {

  const handleRefresh = () => {
    window.location.reload();
  };

  return (
    <div className={classes.root}>
      <Container>
        <div className={classes.label}>500</div>
        <Title className={classes.title}>Something bad just happened</Title>
        <Text size="lg" ta="center" className={classes.description}>
          Our servers could not handle your request. Don&apos;t worry, our development team was
          already notified. Try refreshing the page.
        </Text>
        <Group justify="center">
          <Button className={classes.button} variant="white" size="xl" onClick={handleRefresh}>
            Refresh the page
          </Button>
        </Group>
      </Container>
    </div>
  );
}
