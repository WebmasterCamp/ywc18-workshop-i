import { Container } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import SuggessLocation from "../components/SuggessLocation";
import styled from "styled-components";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import HotelsCard from "../components/HotelsCard";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import FeatureHotel from "../components/FeatureHotel";
import FeatureHotel2 from "../components/FeatureHotel2";

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

const SectionNavigator = styled.div`
  display: block;
  visibility: hidden;
`;

const Home = () => {
  const classes = useStyles();
  const history = useHistory();
  return (
    <>
      <Navbar />
      <Header />
      <Container className={classes.root}>
        <SectionNavigator id="suggest_location" />
        <Typography variant="h5" component="h5" className={classes.Typo}>
          Workation ใกล้บ้าน
        </Typography>
        <Grid container spacing={3}>
          <Grid
            item
            xs={6}
            sm={3}
            onClick={() => {
              history.push("/detail/1");
            }}
          >
            <SuggessLocation
              image="https://a.cdn-hotels.com/gdcs/production172/d459/3af9262b-3d8b-40c6-b61d-e37ae1aa90aa.jpg"
              title="กรุงเทพ"
              subTitle="เดินทาง 3 นาที"
            />
          </Grid>
          <Grid
            item
            xs={6}
            sm={3}
            onClick={() => {
              history.push("/detail/1");
            }}
          >
            <SuggessLocation
              image="https://a.cdn-hotels.com/gdcs/production172/d459/3af9262b-3d8b-40c6-b61d-e37ae1aa90aa.jpg"
              title="นนทบุรี"
              subTitle="เดินทาง 30 นาที"
            />
          </Grid>
          <Grid
            item
            xs={6}
            sm={3}
            onClick={() => {
              history.push("/detail/1");
            }}
          >
            <SuggessLocation
              image="https://a.cdn-hotels.com/gdcs/production172/d459/3af9262b-3d8b-40c6-b61d-e37ae1aa90aa.jpg"
              title="เยาวราช"
              subTitle="เดินทาง 30 นาที"
            />
          </Grid>
          <Grid
            item
            xs={6}
            sm={3}
            onClick={() => {
              history.push("/detail/1");
            }}
          >
            <SuggessLocation
              image="https://a.cdn-hotels.com/gdcs/production172/d459/3af9262b-3d8b-40c6-b61d-e37ae1aa90aa.jpg"
              title="ชะอำ"
              subTitle="เดินทาง 45 นาที"
            />
          </Grid>
        </Grid>
      </Container>
      <div className={classes.featSuggest}>
        <Container className={classes.root}>
          <SectionNavigator id="featured_hotels" />
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

      <div className={classes.featPlan}>
        <Container className={classes.root}>
          <SectionNavigator id="featured_plans" />
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
              <FeatureHotel2 className={classes.FeatureHotel} />
            </Grid>
            <Grid item xs={6} sm={6}>
              <FeatureHotel2 className={classes.FeatureHotel} />
            </Grid>
          </Grid>
        </Container>
      </div>
    </>
  );
};

export default Home;
