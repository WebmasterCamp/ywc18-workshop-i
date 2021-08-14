import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import StarIcon from "@material-ui/icons/Star";
import CheckIcon from "@material-ui/icons/Check";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  details: {
    display: "flex",
    flexDirection: "column",
  },
  content: {
    flex: "1 0 auto",
  },
  cover: {
    width: 300,
    height: 300,
  },
  card: {
    marginBottom: 20,
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
}));

export default function FeatureHotel() {
  const classes = useStyles();
  const history = useHistory();

  return (
    <div className={classes.card}>
      <Card className={classes.root}>
        <CardMedia
          className={classes.cover}
          image="https://ak-d.tripcdn.com/images/220p1700000136q7s4F4E_Z_550_412_R5_Q70_D.jpg"
          title="เดอะ พาราไดซ์ รีสอร์ตแอนด์สปา รีสอร์ตสุดงดงาม อากาศสดชื่น ติดทะเลชะอำ"
          style={{ width: "50%", objectFit: "cover" }}
        />
        <div className={classes.details}>
          <CardContent className={classes.content}>
            <Typography
              component="h5"
              variant="h5"
              onClick={() => {
                history.push("/detail/1");
              }}
            >
              เดอะ พาราไดซ์ รีสอร์ตแอนด์สปา รีสอร์ตสุดงดงาม อากาศสดชื่น
              ติดทะเลชะอำ
            </Typography>
            <Typography variant="subtitle1" color="textSecondary">
              หาดชะอำ, จ.เพชรบุรี
            </Typography>
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

            <div
              style={{
                background: "#F7FAFC",
                padding: "20px",
                borderRadius: "10px",
                marginBottom: "20px",
              }}
            >
              <p>
                บริการยอดเยี่ยม ทำเลดีมาก ประทับใจมากครับ ดีมาก
                เหมาะสมกับการทำงานเป็นอย่างมาก
              </p>
              <div style={{ marginTop: 10 }}>
                <StarIcon style={{ color: "#FF9A16" }} />
                <StarIcon style={{ color: "#FF9A16" }} />
                <StarIcon style={{ color: "#FF9A16" }} />
                <StarIcon style={{ color: "#FF9A16" }} />
              </div>
            </div>
          </CardContent>
        </div>
      </Card>
    </div>
  );
}
