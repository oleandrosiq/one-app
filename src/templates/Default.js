import Container from '@material-ui/core/Container';

import Header from '../partials/Header/Header';

import { makeStyles } from '@material-ui/core/styles';

const useStyle = makeStyles(() => ({
  container: {
    paddingTop: 15,
  }
}));

export default function Default({ children }) {
  const classes = useStyle();

  return (
    <>
      <Header title="My App" />
      <Container className={classes.container}>
        {children}
      </Container>
    </>
  );
}