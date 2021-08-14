import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import FeatureHotel from "../components/FeatureHotel";

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
}));

const SuggestPlan = () => {
  const classes = useStyles();
  return (
    <>
      <Typography variant="h5" component="h5" className={classes.Typo}>
        แพลนทริปสุดพิเศษ จัดสรรได้ตามชอบ
      </Typography>
      <div className={classes.suggest}>
        <FeatureHotel />
        <FeatureHotel />
      </div>
    </>
  );
};

export default SuggestPlan;
