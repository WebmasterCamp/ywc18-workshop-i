import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";

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
}));

export default function FeatureHotel() {
  const classes = useStyles();

  return (
    <div className={classes.card}>
      <Card className={classes.root}>
        <CardMedia
          className={classes.cover}
          image="https://ak-d.tripcdn.com/images/220p1700000136q7s4F4E_Z_550_412_R5_Q70_D.jpg"
          title="Live from space album cover"
        />
        <div className={classes.details}>
          <CardContent className={classes.content}>
            <Typography component="h5" variant="h5">
              Live From Space
            </Typography>
            <Typography variant="subtitle1" color="textSecondary">
              Mac Miller
            </Typography>
          </CardContent>
        </div>
      </Card>
    </div>
  );
}
