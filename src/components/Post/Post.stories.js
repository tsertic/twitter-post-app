import React from "react";

import Post from "./Post";

export default {
  title: "Example/Post",
  component: Post,
};

const Template = () => (
  <Post
    content={'This is my tweet it is very cool and I"m making cool app'}
    date={"02/07/2077"}
  />
);

export const Default = Template.bind({});
