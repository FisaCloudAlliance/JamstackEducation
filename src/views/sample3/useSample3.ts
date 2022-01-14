import profielPic1 from "../../components/profielPic1.png";
import profielPic2 from "../../components/profielPic2.png";
import profielPic3 from "../../components/profielPic3.png";

/**
 * ストーリー
 */
export type Story = {
  userName: string;
  pic: string;
  postingTime: Date;
};

export type Cpmment = {
  account: Account;
  comment: string;
};

/**
 * 投稿
 */
export type Posts = {
  userName: string;
  pic: string;
  caption: string;
  postingTime: Date;
  likesCount: number;
  comment?: Cpmment[];
};

/**
 * アカウント
 */
export type Account = {
  userName: string;
  name: string;
  pic: string;
  bio: string;
  followers: number;
  following: number;
  posts: Posts[];
};

export type Sample3Manager = {
  friendList: Account[];
  postsList: Posts[];
  storyList: Story[];
};

export function useSample3(): Sample3Manager {
  const friendList: Account[] = [
    {
      userName: "tanaka_00",
      name: "tanaka",
      pic: profielPic1,
      bio: "Hello!!",
      followers: 50,
      following: 100,
      posts: [],
    },
    {
      userName: "suzuki.hanako",
      name: "suzuki",
      pic: profielPic2,
      bio: "I Love Dog",
      followers: 150,
      following: 220,
      posts: [],
    },
    {
      userName: "moutenField",
      name: "yamada",
      pic: profielPic3,
      bio: "",
      followers: 300,
      following: 40,
      posts: [],
    },
  ];

  const postsList: Posts[] = [
    {
      userName: "tanaka_00",
      pic: profielPic1,
      caption: "",
      postingTime: "2021/10/04 23:30:00".toDate(),
      likesCount: 10,
    },
    {
      userName: "tanaka_00",
      pic: profielPic1,
      caption: "",
      postingTime: "2021/12/15 23:30:00".toDate(),
      likesCount: 1,
    },
    {
      userName: "suzuki.hanako",
      pic: profielPic2,
      caption: "",
      postingTime: "2021/11/20 23:30:00".toDate(),
      likesCount: 5,
    },
    {
      userName: "suzuki.hanako",
      pic: profielPic2,
      caption: `こんにちは！
今日の朝ごはんはパンでした。

チョコパン
フランスパン
サンドイッチ
`,
      postingTime: "2021/12/20 23:40:00".toDate(),
      likesCount: 2,
    },
    {
      userName: "moutenField",
      pic: profielPic3,
      caption: "",
      postingTime: "2021/07/30 23:30:00".toDate(),
      likesCount: 0,
    },
  ].OrderByDecording((x) => x.postingTime);

  const storyList: Story[] = [
    {
      userName: "tanaka_00",
      pic: "",
      postingTime: "2021/12/31 23:30:00".toDate(),
    },
    {
      userName: "tanaka_00",
      pic: "",
      postingTime: "2022/01/01 00:00:10".toDate(),
    },
    {
      userName: "moutenField",
      pic: "",
      postingTime: "2021/12/31 23:58:10".toDate(),
    },
  ].OrderByDecording((x) => x.postingTime);

  return {
    friendList,
    storyList,
    postsList,
  };
}
