import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import FeatureHotel2 from "../components/FeatureHotel2";
import Container from "@material-ui/core/Container";

const useStyles = makeStyles((theme) => ({
  suggest: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: 10,
  },
  suggestItem: {
    margin: "15px 0",
    backgroundColor: "#e3e3e3",
  },
  Typo: {
    marginTop: 20,
    marginBottom: 20,
  },
  plan: {
    marginTop: 20,
    background: "#F7FAFC",
    paddingTop: 10,
  },
}));

const SuggestPlan = () => {
  const classes = useStyles();
  return (
    <>
      <div className={classes.plan}>
        <Container>
          <h2 variant="h5" component="h5" className={classes.Typo}>
            แพลนทริปสุดพิเศษ จัดสรรได้ตามชอบ
          </h2>
          <div className={classes.suggest}>
            <FeatureHotel2 img="https://images.unsplash.com/photo-1592229505726-ca121723b8ef?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=967&q=80" />
            <FeatureHotel2 img="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" />
          </div>
        </Container>
      </div>
    </>
  );
};

export default SuggestPlan;
