import styled from "@emotion/styled";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { copylight } from "../../../global";

const FooterGrid = styled(Grid)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: copylight,
}));

type Props = {};
const Index: React.FC<Props> = (props) => {
  return (
    <FooterGrid>
      <Typography>copyright©︎FISA All Rights Reserved.</Typography>
    </FooterGrid>
  );
};
export default Index;
