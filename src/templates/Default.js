import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';

import Header from '../partials/Header/Header';

import useAuth from '../state/auth';

const useStyle = makeStyles(() => ({
  container: {
    paddingTop: 15,
  }
}));

export default function Default({ children }) {
  const classes = useStyle();

  const { user } = useAuth();
  
  return (
    <>
      <Header title="My App" user={user} />
      <Container className={classes.container}>
        {children}
      </Container>
    </>
  );
}