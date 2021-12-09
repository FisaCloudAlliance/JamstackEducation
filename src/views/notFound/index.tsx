import styled from "@emotion/styled";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { appbarHeight } from "../../global";

const BG = styled("div")(({ theme }) => ({
  backgroundImage: "url(https://source.unsplash.com/daily?sad)",
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
  backgroundColor: "#fafafa",
  opacity: 0.2,
  height: `calc(100vh - ${appbarHeight}px)`,
  width: "100%",
  position: "absolute",
  top: appbarHeight,
  left: 0,
}));

const Index: React.FC = () => {
  return (
    <Grid container alignItems="center" justifyContent="center">
      <BG />
      <Typography variant="h1" component="p">
        Woops!
        <Typography variant="h3" component="p">
          404 not found
        </Typography>
      </Typography>
    </Grid>
  );
};
export default Index;
