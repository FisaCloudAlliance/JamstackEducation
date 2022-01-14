import {
  Grid,
  styled,
  useTheme,
  Typography,
  Card,
  CardActionArea,
  IconButton,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  CardHeader,
  Avatar,
  CardMedia,
  CardContent,
} from "@mui/material";
import React, { useState } from "react";
import { Account, Posts } from "../useSample3";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import SendOutlinedIcon from "@mui/icons-material/SendOutlined";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import BookmarkBorderOutlinedIcon from "@mui/icons-material/BookmarkBorderOutlined";
import Collapse from "@mui/material/Collapse";
import Condition from "../../../components/Condition";

const StyledProfileImg = styled("img")(({ theme }) => ({
  borderRadius: "50%",
  // border: "1px solid red",
  padding: "5px",
  width: "100%",
  height: "100%",
}));

const StyledPostsImg = styled("img")(({ theme }) => ({
  width: "100%",
  // height: "100%",
}));

type Props = {
  profilePic: string;
  posts: Posts;
};

const PostsDetaile: React.FC<Props> = (props) => {
  const { profilePic, posts, ...rest } = props;
  const theme = useTheme();

  const [isFavorite, setIsFavorite] = useState(false);
  const [isSave, setIsSave] = useState(false);

  const [expanded, setExpanded] = useState(false);

  function FavotiteIconStyle() {
    if (isFavorite) {
      return <FavoriteIcon sx={{ color: `${theme.palette.secondary.main}` }} />;
    }
    return <FavoriteBorderIcon />;
  }

  function SaveIconStyle() {
    if (isSave) {
      return <BookmarkIcon />;
    }
    return <BookmarkBorderOutlinedIcon />;
  }

  function ExpandMore() {
    if (expanded) {
      return <></>;
    }
    return (
      <CardActionArea>
        <Typography
          variant="caption"
          sx={{
            whiteSpace: "break-spaces",
            width: "100%",
            textOverflow: "ellipsis",
            overflow: "hidden",
            display: "-webkit-box",
            WebkitBoxOrient: "vertical",
            WebkitLineClamp: 2,
            fontSize: "12px",
          }}
        >
          {posts.caption}
        </Typography>
      </CardActionArea>
    );
  }

  return (
    <Card sx={{ width: "100%" }}>
      {/* <CardActionArea> */}
      {/* プロフィール写真とユーザーネーム */}
      <CardHeader
        avatar={<Avatar src={profilePic} />}
        action={
          <IconButton>
            <MoreHorizIcon />
          </IconButton>
        }
        title={posts.userName}
      ></CardHeader>
      <Grid container>
        <Grid item xs={12}>
          {/* <Grid container sx={{ height: "50px" }}>
            <Grid
              item
              sx={{ height: "100%", padding: `${theme.spacing(0.5)}` }}
            >
              <StyledProfileImg src={profilePic} />
            </Grid>
            <Grid
              item
              sx={{
                display: "flex",
                flexGrow: 1,
                alignItems: "center",
                padding: `${theme.spacing(0.5)}`,
              }}
            >
              <Typography>{posts.userName}</Typography>
            </Grid>
            <Grid
              item
              sx={{
                display: "flex",
                alignItems: "center",
                padding: `${theme.spacing(0.5)}`,
              }}
            >
              <MoreHorizIcon />
            </Grid>
          </Grid> */}

          {/* 投稿写真 */}
          <CardMedia component="img" image={posts.pic} />
          {/* <Grid container>
            <StyledPostsImg src={posts.pic} />
          </Grid> */}

          <CardContent>
            {/* いいね、コメント等 */}
            <Grid container>
              {/* ハートアイコン */}
              <Grid item>
                <IconButton onClick={() => setIsFavorite(!isFavorite)}>
                  <FavotiteIconStyle />
                </IconButton>
              </Grid>
              {/* コメントアイコン */}
              <Grid item>
                <IconButton>
                  <ChatBubbleOutlineIcon />
                </IconButton>
              </Grid>
              {/* 送信アイコン */}
              <Grid item sx={{ display: "flex", flexGrow: 1 }}>
                <IconButton>
                  <SendOutlinedIcon />
                </IconButton>
              </Grid>
              {/* 保存アイコン */}
              <Grid item>
                <IconButton onClick={() => setIsSave(!isSave)}>
                  <SaveIconStyle />
                </IconButton>
              </Grid>
            </Grid>

            {/* like数 */}
            <Grid
              container
              sx={{ padding: `${theme.spacing(0.5)} ${theme.spacing(1)}` }}
            >
              <Typography
                variant="caption"
                sx={{ padding: `0 ${theme.spacing(1)}` }}
              >
                {posts.likesCount}
              </Typography>
              <Typography
                variant="caption"
                sx={{ padding: `0 ${theme.spacing(1)}` }}
              >
                likes
              </Typography>
            </Grid>

            <Grid
              container
              sx={{ padding: `${theme.spacing(0.5)} ${theme.spacing(1)}` }}
            >
              <Typography variant="caption">{posts.userName}</Typography>
            </Grid>

            {/* 詳細アコーディオン */}
            <Grid container>
              <Accordion sx={{ width: "100%", boxShadow: "none" }}>
                <AccordionSummary sx={{ padding: 0 }}>
                  <Typography
                    variant="caption"
                    sx={{
                      whiteSpace: "break-spaces",
                      width: "100%",
                      textOverflow: "ellipsis",
                      overflow: "hidden",
                      display: "-webkit-box",
                      WebkitBoxOrient: "vertical",
                      WebkitLineClamp: 2,
                      fontSize: "12px",
                    }}
                  >
                    {posts.caption}
                  </Typography>
                </AccordionSummary>
                <AccordionDetails sx={{ padding: 0 }}>
                  <Typography
                    variant="caption"
                    sx={{ whiteSpace: "break-spaces" }}
                  >
                    {posts.caption}
                  </Typography>
                </AccordionDetails>
              </Accordion>

              {/* <ExpandMore />

              <Collapse in={expanded} timeout="auto" unmountOnExit>
                <CardContent>
                  <Typography
                    variant="caption"
                    sx={{ whiteSpace: "break-spaces" }}
                  >
                    {posts.caption}
                  </Typography>
                </CardContent>
              </Collapse> */}
            </Grid>

            {/* コメント */}
            <Condition hidden={!props.posts.comment}>
              <Grid container></Grid>
            </Condition>
          </CardContent>
        </Grid>
      </Grid>

      {/* </CardActionArea> */}
    </Card>
  );
};

export default PostsDetaile;
