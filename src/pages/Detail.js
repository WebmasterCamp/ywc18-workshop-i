import { useParams } from "react-router-dom";
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";
import styled from "styled-components";
import Typography from "@material-ui/core/Typography";
import Navbar from "../components/Navbar";
import SuggestPlan from "../components/SuggestPlan";
import CheckIcon from "@material-ui/icons/Check";
import StarsIcon from "@material-ui/icons/Stars";
import Book from "../components/Book";

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
    backgroundColor: "#F6F6F6",
    padding: 20,
    marginBottom: theme.spacing(2),
  },
  facility: {
    width: "100%",
    padding: 20,
    display: "grid",
    gridTemplateColumns: "auto auto auto",
    gap: 20,
    float: "left",
    textAlign: "left",
  },
  Detail: {
    display: "grid",
    gridTemplateColumns: "2fr 1fr",
    gap: 10,
  },
  ads: {
    backgroundColor: "#e3e3e3",
  },
  hR: {
    marginTop: theme.spacing(4),
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
          Workation ใกล้บ้าน
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
                <StarsIcon /> การทำความสะอาดแบบพิเศษ
              </Typography>
              <Typography variant="p" component="p" className={classes.Indent}>
                &emsp;&emsp;การทำความสะอาดแบบพิเศษเพื่อใช้ในสถานการณ์ COVID-19
                และอนาคต
              </Typography>
              <Typography variant="h6" component="h6" className={classes.Typo}>
                <StarsIcon />
                ทำเลยอดเยี่ยม
              </Typography>
              <Typography variant="p" component="p" className={classes.Indent}>
                &emsp;&emsp;100% ของผู้เข้าพักล่าสุดให้คะแนนสถานที่ 5 ดาว
              </Typography>
            </div>
            <div className={classes.facility}>
              <Typography variant="p" component="p" className={classes.Indent}>
                <CheckIcon style={{ color: "green" }} />
                Wifi ความเร็วสูง
              </Typography>
              <Typography variant="p" component="p" className={classes.Typo}>
                <CheckIcon style={{ color: "green" }} />
                ปลั๊กพ่วงให้ยืม
              </Typography>
              <Typography variant="p" component="p" className={classes.Indent}>
                <CheckIcon style={{ color: "green" }} />
                ชายหาด
              </Typography>
              <Typography variant="p" component="p" className={classes.Indent}>
                <CheckIcon style={{ color: "green" }} />
                เก้าอี้ถูกสุขลักษณะ
              </Typography>
              <Typography variant="p" component="p" className={classes.Indent}>
                <CheckIcon style={{ color: "green" }} />
                ปรินท์เตอร์ให้ยืม
              </Typography>
            </div>
          </div>
          <Book />
        </div>

        <hr className={classes.hR} />

        <SuggestPlan />
      </Container>
    </>
  );
};

export default Detail;
