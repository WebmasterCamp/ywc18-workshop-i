import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import { useHistory } from "react-router-dom";
import CheckIcon from "@material-ui/icons/Check";

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

export default function FeatureHotel2({ img }) {
  const classes = useStyles();
  const history = useHistory();
  return (
    <div className={classes.card}>
      <Card className={classes.root}>
        <CardMedia
          className={classes.cover}
          image={img}
          title="เดอะ พาราไดซ์ รีสอร์ตแอนด์สปา รีสอร์ตสุดงดงาม อากาศสดชื่น ติดทะเลชะอำ"
          style={{ width: "50%", objectFit: "cover" }}
        />
        <div className={classes.details}>
          <CardContent className={classes.content}>
            <h2
              onClick={() => {
                history.push("/detail/1");
              }}
            >
              เดอะ พาราไดซ์ รีสอร์ตแอนด์สปา รีสอร์ตสุดงดงาม อากาศสดชื่น
              ติดทะเลชะอำ
            </h2>
            <p variant="subtitle1" color="textSecondary">
              หาดชะอำ, จ.เพชรบุรี
            </p>
            <div className={classes.facility}>
              <p variant="p" component="p" className={classes.Indent}>
                <CheckIcon style={{ color: "green" }} />
                Wifi ความเร็วสูง
              </p>
              <p variant="p" component="p" className={classes.Typo}>
                <CheckIcon style={{ color: "green" }} />
                ปลั๊กพ่วงให้ยืม
              </p>
              <p variant="p" component="p" className={classes.Indent}>
                <CheckIcon style={{ color: "green" }} />
                ชายหาด
              </p>
            </div>
          </CardContent>
        </div>
      </Card>
    </div>
  );
}
