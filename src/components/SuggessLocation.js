import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";

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
    width: 151,
  },
  controls: {
    display: "flex",
    alignItems: "center",
    paddingLeft: theme.spacing(1),
    paddingBottom: theme.spacing(1),
  },
  playIcon: {
    height: 38,
    width: 38,
  },
}));

const SuggessLocation = ({ image, title, subTitle }) => {
  const classes = useStyles();

  return (
    <Grid>
      <Card className={classes.root}>
        <CardMedia className={classes.cover} image={image} />
        <div className={classes.details}>
          <CardContent className={classes.content}>
            <h2 component="h5" variant="h5">
              {title}
            </h2>
            <p variant="subtitle1" color="textSecondary">
              {subTitle}
            </p>
          </CardContent>
        </div>
      </Card>
    </Grid>
  );
};

export default SuggessLocation;
