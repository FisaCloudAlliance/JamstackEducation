import {
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { useDispatch } from "react-redux";
import { updateDrawer } from "../../../store/drawer/action";
import { useHistory } from "react-router";
type Props = {
  title: string;
  to: string;
  icon: any;
};

const MenuItem: React.FC<Props> = (props) => {
  const { title, to, icon } = props;
  const dispath = useDispatch();
  const history = useHistory();
  function onClose() {
    history.push(to);
    dispath(updateDrawer(false));
  }

  return (
    <ListItem disablePadding>
      <ListItemButton onClick={onClose}>
        <ListItemIcon>{icon}</ListItemIcon>
        <ListItemText primary={title} />
      </ListItemButton>
    </ListItem>
  );
};
export default MenuItem;
