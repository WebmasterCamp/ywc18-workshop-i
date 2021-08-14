import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles({
  root: {
    maxWidth: "100%",
    padding: 20,
  },
  formControl: {
    minWidth: 120,
  },
  Typo: {
    display: "inline",
    verticalAlign: "top",
    lineHeight: "2em",
  },
  formCon: {
    marginTop: "1em",
    width: "100%",
  },
  btn: {
    background: "#FF9A16",
    width: "100%",
    padding: "1em",
    marginTop: "1em",
  },
});

export default function Book() {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <div className={classes.price}>
        <h1 className={classes.Typo}>1200</h1>{" "}
        <p className={classes.Typo} style={{ lineHeight: "4.0em" }}>
          / คืน
        </p>
        <div>
          <Grid container justifyContent="space-around">
            <TextField
              id="date"
              label="เช็คอิน"
              type="date"
              defaultValue="2021-05-24"
              className={classes.textField}
              InputLabelProps={{
                shrink: true,
              }}
            />
            <TextField
              id="date"
              label="เช็คเอาท์"
              type="date"
              defaultValue="2021-05-24"
              className={classes.textField}
              InputLabelProps={{
                shrink: true,
              }}
            />
          </Grid>
          <FormControl variant="outlined" className={classes.formCon}>
            <InputLabel htmlFor="outlined-age-native-simple">
              ผู้เข้าพัก
            </InputLabel>
            <Select native label="num">
              <option aria-label="None" value="" />
              <option value={1}>1</option>
              <option value={2}>2</option>
              <option value={3}>3</option>
              <option value={4}>4</option>
              <option value={5}>5</option>
            </Select>
          </FormControl>
          <Button variant="contained" color="primary" className={classes.btn}>
            จอง
          </Button>
        </div>
      </div>
    </Card>
  );
}
