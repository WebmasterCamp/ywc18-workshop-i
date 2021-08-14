import { useState } from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import img_header from '../assets/img/header.jpg'
import TextField from '@material-ui/core/TextField';

import InputAdornment from '@material-ui/core/InputAdornment';
import SearchIcon from '@material-ui/icons/Search';
import Button from '@material-ui/core/Button';

const Container = styled.div`
  width: 100%;
  height: 454px;
  background-color: black;
  margin-top: 80px;
  background-image: url(${img_header});
  background-repeat: no-repeat;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-size: cover;
  justify-content: center;
   
`;

const HeaderText = styled.h1`
    text-transform: uppercase;
    font-size: 72px;
    color: #ffffff;
    margin: 0;
`

const PRText = styled.h4`
    color: #ffffff;
    font-size: 34px;
    margin: 0;
`

const ButtonSubmit = styled(Button)`
     && {
        background-color: #FF9A16;
        height: 36px !important;
        width: 118px;
        margin-left:  16px;
     }
`

const TextFieldCustom = styled(TextField)`
     && {
        width: 493px;
        input {
            height: 36px !important;
            padding: 0;
        }
     }
`

const SearchBox = () => {
    const [keyword, setKeyword] = useState("")

    const history = useHistory();

    const handleOnChangeSearch = (e) => {
        setKeyword(e.target.value)
    }

    const handleSubmit = (e) => {
    console.log("clicked")
        history.push(`/search?keyword=${keyword}`);
    }

    return (
        <ContainerSearch>
            <TextFieldCustom
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
            <ButtonSubmit variant="contained" onClick={handleSubmit}>ค้นหา</ButtonSubmit>
        </ContainerSearch>
    )
}

const ContainerSearch = styled.div`
     display: flex;
    background: #FFFFFF;
    border-radius: 8px;
    padding: 16px;
    margin-bottom: 48px;
`

const Header = () => {
  return (
      <Container>
            <SearchBox />
            <HeaderText>
                Ideas happen even in travel
            </HeaderText>
            <PRText>
                ค้นหาสถานที่ท่องเที่ยว เพื่อการพักผ่อนและทำงาน ตามสไตล์ Workation
            </PRText>
      </Container>
  );
};



export default Header;
