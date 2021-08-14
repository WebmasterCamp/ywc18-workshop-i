import { Redirect, useHistory } from "react-router-dom";
import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  container: {
    padding: theme.spacing(3),
    marginTop: 50,
  },
  Typo: {
    marginBottom: 10,
  },
}));

const isLogin = localStorage.getItem("IS_LOGIN");

const Login = () => {
  const history = useHistory();
  // const [credential, setCredential] = useState({
  //   username: "",
  //   password: "",
  // });

  // const handleOnChange = (e) => {
  //   setCredential({ ...credential, [e.target.name]: e.target.value });
  //   console.log(credential);
  // };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("IS_LOGIN", true);
    history.push("/search");
  };

  const classes = useStyles();

  return !isLogin ? (
    <>
      <Container className={classes.container} maxWidth="xs">
        <form>
          <Typography
            variant="h2"
            component="h2"
            align="center"
            className={classes.Typo}
          >
            Sign in
          </Typography>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    label="Username"
                    name="username"
                    size="small"
                    variant="outlined"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    label="Password"
                    name="password"
                    size="small"
                    type="password"
                    variant="outlined"
                  />
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={12}>
              <Button
                color="primary"
                fullWidth
                type="submit"
                variant="contained"
                onClick={handleOnSubmit}
              >
                Log in
              </Button>
            </Grid>
          </Grid>
        </form>
      </Container>
    </>
  ) : (
    <Redirect to="/search" />
  );
};

export default Login;
