import { Drawer, Grid, List, styled } from "@mui/material";
import { drawerWidth } from "../../../global";
import { useDrawer } from "./useDrawer";
import MenuItem from "./nemuItem";
import HomeIcon from "@mui/icons-material/Home";

const DrawerGrid = styled(Grid)(({ theme }) => ({
  zIndex: theme.zIndex.drawer + 1,
  width: drawerWidth,
  minHeight: "100vh",
  backgroundColor: "transparent",
}));

const items: {
  title: string;
  to: string;
  icon: any;
}[] = [
  { title: "ホーム", to: "/", icon: <HomeIcon /> },
  { title: "サンプル - 1", to: "/sample1", icon: <HomeIcon /> },
  { title: "サンプル - 2", to: "/sample2", icon: <HomeIcon /> },
  { title: "サンプル - 3", to: "/sample3", icon: <HomeIcon /> },
];

type Props = {};
/** この tsx ファイルは外観とバインドの定義のみを行う */
const Index: React.FC<Props> = (props) => {
  // この外観に関する振る舞いを カスタム Hooks から取得
  const context = useDrawer();

  // return 以下は 外観を定義していく
  return (
    <Drawer
      anchor="left"
      open={context.open}
      onClose={context.onCloseDrawer}
      sx={{
        [`& .MuiDrawer-paper`]: {},
      }}
    >
      <DrawerGrid>
        <List component="nav">
          {items.map((x) => {
            return <MenuItem {...x} />;
          })}
        </List>
      </DrawerGrid>
    </Drawer>
  );
};
export default Index;
