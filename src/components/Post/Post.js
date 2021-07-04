import React from "react";
import styles from "./Post.module.scss";
import PropTypes from "prop-types";
const Post = ({ content, date }) => {
  return (
    <li className={styles["post"]}>
      <p className={styles["content"]}>{content}</p>
      <p className={styles["date"]}>{date}</p>
    </li>
  );
};

Post.propTypes = {
  content: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
};

export default Post;
