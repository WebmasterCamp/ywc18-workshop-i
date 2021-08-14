import { useParams } from "react-router-dom";
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";
import styled from "styled-components";
import Typography from "@material-ui/core/Typography";
import Navbar from "../components/Navbar";

const Img = styled.img`
  width: 100%;
  margin-bottom: 8px;
`;

const useStyles = makeStyles((theme) => ({
  container: {
    marginTop: theme.spacing(12),
  },
  ImageGrid: {
    display: "grid",
    gap: 10,
    gridTemplateColumns: "1fr 1fr",
  },
  SubImage: {
    display: "grid",
    gap: 10,
    gridTemplateColumns: "1fr 1fr",
  },
  Typo: {},

  topDetail: {
    backgroundColor: "#e3e3e3",
    padding: 20,
    marginBottom: theme.spacing(2),
  },
  facility: {
    backgroundColor: "#e3e3e3",
    width: "100%",
    padding: 20,
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: 20,
    float: "left",
  },
  Detail: {
    display: "grid",
    gridTemplateColumns: "2fr 1fr",
    gap: 10,
  },
  ads: {
    backgroundColor: "#e3e3e3",
  },
  suggest: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr 1fr",
    gap: 10,
  },
  suggestItem: {
    margin: "15px 0",
    backgroundColor: "#e3e3e3",
  },
}));

const Detail = () => {
  const { id } = useParams();
  const classes = useStyles();

  return (
    <>
      <Navbar />
      <Container className={classes.container}>
        <Typography variant="h4" component="h4" className={classes.Typo}>
          Workation ใกล้บ้าน {id}
        </Typography>
        <div className={classes.ImageGrid}>
          <div>
            <Img src="https://pix10.agoda.net/hotelImages/124/1246280/1246280_16061017110043391702.jpg?s=1024x768" />
          </div>
          <div>
            <div className={classes.ImageGrid}>
              <Img src="https://pix10.agoda.net/hotelImages/124/1246280/1246280_16061017110043391702.jpg?s=1024x768" />
              <Img src="https://pix10.agoda.net/hotelImages/124/1246280/1246280_16061017110043391702.jpg?s=1024x768" />
            </div>
            <div className={classes.ImageGrid}>
              <Img src="https://pix10.agoda.net/hotelImages/124/1246280/1246280_16061017110043391702.jpg?s=1024x768" />
              <Img src="https://pix10.agoda.net/hotelImages/124/1246280/1246280_16061017110043391702.jpg?s=1024x768" />
            </div>
          </div>
        </div>
        <div className={classes.Detail}>
          <div>
            <div className={classes.topDetail}>
              <Typography variant="h6" component="h6" className={classes.Typo}>
                การทำความสะอาดแบบพิเศษ
              </Typography>
              <Typography variant="p" component="p" className={classes.Indent}>
                &emsp;Workation ใกล้บ้าน
              </Typography>
              <Typography variant="h6" component="h6" className={classes.Typo}>
                การทำความสะอาดแบบพิเศษ
              </Typography>
              <Typography variant="p" component="p" className={classes.Indent}>
                &emsp;Workation ใกล้บ้าน
              </Typography>
            </div>
            <div className={classes.facility}>
              <Typography variant="h6" component="h6" className={classes.Typo}>
                การทำความสะอาดแบบพิเศษ
              </Typography>
              <Typography
                variant="h6"
                component="h6"
                className={classes.Indent}
              >
                Workation ใกล้บ้าน
              </Typography>
              <Typography variant="h6" component="h6" className={classes.Typo}>
                การทำความสะอาดแบบพิเศษ
              </Typography>
              <Typography
                variant="h6"
                component="h6"
                className={classes.Indent}
              >
                Workation ใกล้บ้าน
              </Typography>
            </div>
          </div>
          <div className={classes.ads}>test</div>
        </div>
        <div className={classes.suggest}>
          <div className={classes.suggestItem}>ccc</div>
          <div className={classes.suggestItem}>ccc</div>
          <div className={classes.suggestItem}>ccc</div>
        </div>
      </Container>
    </>
  );
};

export default Detail;
