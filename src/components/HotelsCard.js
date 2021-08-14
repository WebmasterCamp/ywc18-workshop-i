import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { useHistory } from "react-router-dom";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    // marginBottom: 40,
  },
  media: {
    height: 250,
  },
});

export default function HotelCard({ img }) {
  const classes = useStyles();
  const history = useHistory();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={img}
          title="Contemplative Reptile"
          onClick={() => {
            history.push("/detail/1");
          }}
        />
        <CardContent>
          <h2 gutterBottom variant="h5" component="h2">
            เดอะ พาราไดซ์ รีสอร์ต แอนด์สปา
          </h2>
          <p variant="body2" color="textSecondary" component="p">
            หาดชะอำ, จ.เพชรบุรี
          </p>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
