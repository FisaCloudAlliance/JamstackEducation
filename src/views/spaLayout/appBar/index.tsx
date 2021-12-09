import {
  AppBar,
  IconButton,
  Link,
  styled,
  Toolbar,
  Typography,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import Headroom from "react-headroom";
import { appbarHeight } from "../../../global";
import LogoPng from "./fisalogo.png";
import { useAppBar } from "./useAppBar";

const StyledAppBar = styled(AppBar)(({ theme }) => ({
  zIndex: 1200,
  top: 0,
  height: appbarHeight,
  backgroundColor: "transparent",
}));
type Props = {};

const Index: React.FC<Props> = (props) => {
  const context = useAppBar();
  return (
    <StyledAppBar
      elevation={0 /* タイトルバーのshadowスタイルを消す */}
      position="fixed"
    >
      <Headroom>
        <Toolbar>
          <Link
            component="button"
            onClick={async () => await context.reloadAsync()}
          >
            <img src={LogoPng} height={32} />
          </Link>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            {context.title}
          </Typography>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            onClick={context.toggleDrawer}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </Headroom>
    </StyledAppBar>
  );
};

export default Index;
