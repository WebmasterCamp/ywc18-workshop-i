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
          <Typography variant="h5" component="h5" className={classes.Typo}>
            แพลนทริปสุดพิเศษ จัดสรรได้ตามชอบ
          </Typography>
          <div className={classes.suggest}>
            <FeatureHotel2 />
            <FeatureHotel2 />
          </div>
        </Container>
      </div>
    </>
  );
};

export default SuggestPlan;
