import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Container as ContainerGrid } from "@material-ui/core";
import HotelCard from "../components/HotelsCard";
import Grid from "@material-ui/core/Grid";
import { MOCK_HOTELS } from "../data/hotels";
import styled from "styled-components";
import img_visitor_price_map from "../assets/img/price-map.jpg";

import TextField from "@material-ui/core/TextField";
import InputAdornment from "@material-ui/core/InputAdornment";
import SearchIcon from "@material-ui/icons/Search";

import MenuItem from "@material-ui/core/MenuItem";
import InputLabel from "@material-ui/core/InputLabel";
import { makeStyles } from "@material-ui/core/styles";
import Select from "@material-ui/core/Select";
import Navbar from "../components/Navbar";
import FormControl from "@material-ui/core/FormControl";

const TextFieldcustom = styled(TextField)`
      && {
        width: 493px;
        input {
            height: 36px !important;
            padding: 0;
        }
     }
`

const ContainerLine = styled.div`
width: 100%;
    display: flex;
    align-items: center;
`

const Container = styled.div`
  display: flex;
  height: 100vh;
  padding-left: 56px;
  margin-top: 80px;
`;

const ContainerRightSide = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
`;

const Map = styled.img`
  height: 100vh;
`;

const ContainerGridCustom = styled(ContainerGrid)`
  && {
    width: 100%;
    height: 100%;
    overflow: scroll;
    overflow-x: hidden;

    .example::-webkit-scrollbar {
      display: none;
    }
  }
`;

const ContainerSearchbar = styled.div`
  margin-top: 80px;
  height: 146px;
  width: 100%;
  margin-bottom: 32px;
  max-width: 1232px;
  margin: 32px auto;
  position: sticky;
`;

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: "25ch",
    },
  },
}));

const useStylesDropDown = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));
// A custom hook that builds on useLocation to parse
// the query string for you.
const useQuery = () => {
  return new URLSearchParams(useLocation().search);
};

const SearchBar = ({ keyword, setKeyword }) => {
  const classes = useStyles();
  const classesDropDown = useStylesDropDown();
  const [visitor, setVisitor] = useState("??????????????????????????????");
  const [star, setStar] = useState("????????????????????????");

  const handleChangeVisitor = (event) => {
    setVisitor(event.target.value);
  };

  const handleChangeStar = (event) => {
    setStar(event.target.value);
  };

  const handleOnChangeSearch = (e) => {
    setKeyword(e.target.value);
  };

  let query = useQuery();
  useEffect(() => {
    setKeyword(query.get("keyword"));
  }, []);

  return (
    <ContainerSearchbar>
      <form className={classes.root} noValidate autoComplete="off">
        <TextField
          label="????????????????????????????????????"
          variant="outlined"
          value={keyword}
          onChange={handleOnChangeSearch}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            ),
          }}
        />
        <TextField
          id="date"
          label="?????????????????????"
          type="date"
          defaultValue="2017-05-24"
          className={classes.textField}
          InputLabelProps={{
            shrink: true,
          }}
        />
        <TextField
          id="date"
          label="???????????????????????????"
          type="date"
          defaultValue="2017-05-24"
          className={classes.textField}
          InputLabelProps={{
            shrink: true,
          }}
        />
        <FormControl variant="outlined" className={classesDropDown.formControl}>
          <InputLabel id="demo-simple-select-outlined-label">
            ??????????????????????????????
          </InputLabel>
          <Select
            labelId="demo-simple-select-outlined-label"
            id="demo-simple-select-outlined"
            value={visitor}
            onChange={handleChangeVisitor}
            label="??????????????????????????????"
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value={10}>??????????????????????????????</MenuItem>
          </Select>
        </FormControl>
        <FormControl variant="outlined" className={classesDropDown.formControl}>
          <InputLabel id="demo-simple-select-outlined-label">
            ????????????????????????
          </InputLabel>
          <Select
            labelId="demo-simple-select-outlined-label"
            id="demo-simple-select-outlined"
            value={star}
            onChange={handleChangeStar}
            label="????????????????????????"
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value={10}>????????????????????????</MenuItem>
          </Select>
        </FormControl>
        <TextField label="??????????????????????????????" variant="outlined" />
        <TextField label="??????????????????????????????" variant="outlined" />
      </form>
    </ContainerSearchbar>
  );
};

const Search = () => {
  const [keyword, setKeyword] = useState("");

  return (
    <>
      <Navbar />
      <Container>
        <ContainerRightSide>
          <SearchBar keyword={keyword} setKeyword={setKeyword} />
          <ContainerGridCustom>
            <Grid container spacing={3}>
              {MOCK_HOTELS.filter((hotel) => hotel?.name.includes(keyword)).map(
                (hotel, i) => (
                  <Grid item xs={6} sm={3}>
                    <HotelCard
                      key={i}
                      {...hotel}
                      img="https://images.unsplash.com/photo-1571896349842-33c89424de2d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
                    />
                  </Grid>
                )
              )}
            </Grid>
          </ContainerGridCustom>
        </ContainerRightSide>
        <Map src={img_visitor_price_map} />
      </Container>
    </>
  );
};

export default Search;
