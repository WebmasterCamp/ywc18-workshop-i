import styled from "styled-components";
import Button from "@material-ui/core/Button";

const ContainerNavbar = styled.div`
  background-color: pink;
  width: 100%;
  height: 80px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  top: 0;
  padding: 0 54px;
  z-index: 10;
`;

const ContainerLeftSide = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0;
`;

const IDEAVELText = styled.p`
  font-weight: bold;
  font-size: 24px;
  margin-right: 48px;
`;

const ContainerNavigator = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 178px;

  a {
    text-decoration: none;
    color: black;
  }
`;

const Navbar = () => {
  return (
    <ContainerNavbar>
      <ContainerLeftSide>
        <IDEAVELText>IDEAVEL</IDEAVELText>
        <ContainerNavigator>
          <a href="/#suggest_location">เมนู 1</a>
          <a href="/#featured_hotels">เมนู 2</a>
          <a href="/#featured_plans">เมนู 3</a>
        </ContainerNavigator>
      </ContainerLeftSide>
      <Button variant="contained">Button</Button>
    </ContainerNavbar>
  );
};

export default Navbar;
