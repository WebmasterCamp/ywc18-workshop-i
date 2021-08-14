import { useParams } from "react-router-dom";
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";
import styled from "styled-components";

const Img = styled.img`
  width: 100%;
`;

const useStyles = makeStyles((theme) => ({
  container: {},
  ImageGrid: {
    display: "grid",
    gap: 10,
    gridTemplateColumns: "1fr 1fr",
  },
  SubImage: {
    display: "grid",
    gap: 10,
    gridTemplateColumns: "1fr 1fr",
  },
}));

const Detail = () => {
  const { id } = useParams();
  const classes = useStyles();

  return (
    <>
      <Container>
        <div className={classes.ImageGrid}>
          <div>
            <Img src="https://pix10.agoda.net/hotelImages/124/1246280/1246280_16061017110043391702.jpg?s=1024x768" />
          </div>
          <div>
            <div className={classes.ImageGrid}>
              <Img src="https://pix10.agoda.net/hotelImages/124/1246280/1246280_16061017110043391702.jpg?s=1024x768" />
              <Img src="https://pix10.agoda.net/hotelImages/124/1246280/1246280_16061017110043391702.jpg?s=1024x768" />
            </div>
            <div className={classes.ImageGrid}>
              <Img src="https://pix10.agoda.net/hotelImages/124/1246280/1246280_16061017110043391702.jpg?s=1024x768" />
              <Img src="https://pix10.agoda.net/hotelImages/124/1246280/1246280_16061017110043391702.jpg?s=1024x768" />
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Detail;
