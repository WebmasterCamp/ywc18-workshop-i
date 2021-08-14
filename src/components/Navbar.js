import styled from "styled-components";
import logo from "../assets/img/logo2.png";

const ContainerNavbar = styled.div`
  background-color: white;
  width: 100%;
  height: 80px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  top: 0;
  padding: 0 54px;
  z-index: 10;
  box-shadow: 0px 1px 5px #443f41;
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
        <IDEAVELText>
          <img src={logo} style={{ width: "80px" }} />
        </IDEAVELText>
      </ContainerLeftSide>
    </ContainerNavbar>
  );
};

export default Navbar;
