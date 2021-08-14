import { useState, useEffect } from 'react'
import { useParams } from "react-router-dom";
import { Container as ContainerGrid } from "@material-ui/core";
import HotelCard from '../components/HotelsCard'
import Grid from "@material-ui/core/Grid";
import { MOCK_HOTELS } from '../data/hotels'
import styled from 'styled-components';
import img_visitor_price_map from '../assets/img/price-map.jpg'

import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
import SearchIcon from '@material-ui/icons/Search';

import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';
import { makeStyles } from '@material-ui/core/styles';
import Select from '@material-ui/core/Select';

import FormControl from '@material-ui/core/FormControl';

const Container = styled.div`
    display: flex;
    height: 100vh;
    padding-left: 56px;
    margin-top: 80px;
`

const ContainerRightSide = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
`

const Map = styled.img`
    height: 100vh;
`

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
`

const ContainerSearchbar = styled.div`
    margin-top: 80px;
    height: 146px;
    width: 100%;
    margin-bottom: 32px;
    max-width: 1232px;
    margin: 32px auto;
    position: sticky;
`

const useStyles = makeStyles((theme) => ({
    root: {
        '& .MuiTextField-root': {
            margin: theme.spacing(1),
            width: '25ch',
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

const SearchBar = ({ keyword, setKeyword }) => {
    const classes = useStyles();
    const classesDropDown = useStylesDropDown()
    const [visitor, setVisitor] =  useState('ผู้เข้าพัก');
    const [star, setStar] = useState('ระดับดาว');
    let { slug } = useParams();
    const handleChangeVisitor = (event) => {
        setVisitor(event.target.value);
    };

    const handleChangeStar = (event) => {
        setStar(event.target.value)
    }

    const handleOnChangeSearch = (e) => {
        setKeyword(e.target.value)
    }
    useEffect(() => {
        setKeyword(slug)
    }, [])

    return (
        <ContainerSearchbar>
            <form className={classes.root} noValidate autoComplete="off">
                <TextField 
                    label="ค้นหาสถานที่" variant="outlined"
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
                    label="เช็คอิน"
                    type="date"
                    defaultValue="2017-05-24"
                    className={classes.textField}
                    InputLabelProps={{
                        shrink: true,
                    }}
                />
                <TextField
                    id="date"
                    label="เช็คเอาท์"
                    type="date"
                    defaultValue="2017-05-24"
                    className={classes.textField}
                    InputLabelProps={{
                        shrink: true,
                    }}
                />
                <FormControl variant="outlined" className={classesDropDown.formControl}>
                    <InputLabel id="demo-simple-select-outlined-label">ผู้เข้าพัก</InputLabel>
                    <Select
                        labelId="demo-simple-select-outlined-label"
                        id="demo-simple-select-outlined"
                        value={visitor}
                        onChange={handleChangeVisitor}
                        label="ผู้เข้าพัก"
                    >
                        <MenuItem value="">
                            <em>None</em>
                        </MenuItem>
                        <MenuItem value={10}>ผู้เข้าพัก</MenuItem>
                    </Select>
                </FormControl>
                <FormControl variant="outlined" className={classesDropDown.formControl}>
                    <InputLabel id="demo-simple-select-outlined-label">ระดับดาว</InputLabel>
                    <Select
                        labelId="demo-simple-select-outlined-label"
                        id="demo-simple-select-outlined"
                        value={star}
                        onChange={handleChangeStar}
                        label="ระดับดาว"
                    >
                        <MenuItem value="">
                            <em>None</em>
                        </MenuItem>
                        <MenuItem value={10}>ระดับดาว</MenuItem>
                    </Select>
                </FormControl>
                <TextField
                    label="ราคาต่ำสุด" variant="outlined"
                />
                <TextField
                    label="ราคาสูงสุด" variant="outlined"
                />
            </form>
       
        </ContainerSearchbar>
    );
}

const Search = () => {

    const [keyword, setKeyword] = useState("")

    return (
    <>
    <Container>
        <ContainerRightSide>
                <SearchBar keyword={keyword} setKeyword={setKeyword} />
                <ContainerGridCustom>
                    <Grid container spacing={3}>
                        {
                            MOCK_HOTELS
                            .filter(hotel => hotel?.name.includes(keyword))
                            .map((hotel, i) =>
                                <Grid item xs={6} sm={3} >
                                    <HotelCard key={i} {...hotel} />
                                </Grid>
                            )
                        }
                    </Grid>
                </ContainerGridCustom>
        </ContainerRightSide> 
        <Map src={img_visitor_price_map} />
    </Container>
    </>
    )
}


export default Search
