import React from "react";
import { motion } from "framer-motion";
import styles from "./AddPostForm.module.scss";
const AddPostForm = () => {
  return (
    <form className={styles["add-post-form"]}>
      <textarea></textarea>
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        transition={{ duration: 0.2 }}
      >
        Add New Post
      </motion.button>
    </form>
  );
};

export default AddPostForm;
