import { Container } from "@material-ui/core";
import SuggessLocation from "../components/SuggessLocation";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import HotelsCard from "../components/HotelsCard";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import FeatureHotel from "../components/FeatureHotel";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  Typo: {
    margin: "30px 0",
  },
  featSuggest: {
    backgroundColor: "#e8e8e8",
    marginTop: 50,
    padding: "10px 0",
    spacing: 8,
  },
  featPlan: {
    marginTop: 10,
    padding: "10px 0",
  },
}));

const Home = () => {
  const classes = useStyles();
  return (
    <>
      <Navbar />
      <Header />
      <Container className={classes.root}>
        <Typography variant="h5" component="h5" className={classes.Typo}>
          Workation ใกล้บ้าน
        </Typography>
        <Grid container spacing={3}>
          <Grid item xs={6} sm={3}>
            <SuggessLocation
              image="https://a.cdn-hotels.com/gdcs/production172/d459/3af9262b-3d8b-40c6-b61d-e37ae1aa90aa.jpg"
              title="กรุงเทพ"
              subTitle="เมืองน่าเที่ยว"
            />
          </Grid>
          <Grid item xs={6} sm={3}>
            <SuggessLocation
              image="https://a.cdn-hotels.com/gdcs/production172/d459/3af9262b-3d8b-40c6-b61d-e37ae1aa90aa.jpg"
              title="กรุงเทพ"
              subTitle="เมืองน่าเที่ยว"
            />
          </Grid>
          <Grid item xs={6} sm={3}>
            <SuggessLocation
              image="https://a.cdn-hotels.com/gdcs/production172/d459/3af9262b-3d8b-40c6-b61d-e37ae1aa90aa.jpg"
              title="กรุงเทพ"
              subTitle="เมืองน่าเที่ยว"
            />
          </Grid>
          <Grid item xs={6} sm={3}>
            <SuggessLocation
              image="https://a.cdn-hotels.com/gdcs/production172/d459/3af9262b-3d8b-40c6-b61d-e37ae1aa90aa.jpg"
              title="กรุงเทพ"
              subTitle="เมืองน่าเที่ยว"
            />
          </Grid>
        </Grid>
      </Container>
      <div className={classes.featSuggest} id="featured_hotels">
        <Container className={classes.root}>
          <Typography
            variant="h5"
            component="h5"
            className={classes.Typo}
            spacing={4}
          >
            Featured hotels
          </Typography>
          <FeatureHotel className={classes.FeatureHotel} />
          <Grid container spacing={3}>
            <Grid item xs={6} sm={3}>
              <HotelsCard />
            </Grid>
            <Grid item xs={6} sm={3}>
              <HotelsCard />
            </Grid>
            <Grid item xs={6} sm={3}>
              <HotelsCard />
            </Grid>
            <Grid item xs={6} sm={3}>
              <HotelsCard />
            </Grid>
          </Grid>
        </Container>
      </div>
      <div className={classes.featPlan} id="featured_plans">
        <Container className={classes.root}>
          <Typography
            variant="h5"
            component="h5"
            className={classes.Typo}
            spacing={4}
          >
            Featured Plans
          </Typography>
          <Grid container spacing={3}>
            <Grid item xs={6} sm={6}>
              <FeatureHotel className={classes.FeatureHotel} />
            </Grid>
            <Grid item xs={6} sm={6}>
              <FeatureHotel className={classes.FeatureHotel} />
            </Grid>
          </Grid>
        </Container>
      </div>
    </>
  );
};

export default Home;
