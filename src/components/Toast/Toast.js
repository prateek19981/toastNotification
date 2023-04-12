import React, { useEffect } from "react";
import styles from "./Toast.module.css";

const Toast = ({ list, deleteToast, setPause }) => {
  return (
    <div
      className={`${styles.container} ${styles.topLeft}`}
      onMouseOver={() => {
        console.log("heree");
        setPause(true);
      }}
      onMouseLeave={() => {
        console.log("there");
        setPause(false);
      }}>
      {list.map((item) => {
        return (
          <div
            style={{ background: item.background }}
            className={styles.notify}
            key={item.id}>
            <div className={styles.header}>
              <p>{item.title}</p>{" "}
              <span onClick={() => deleteToast(item.id)}>X</span>
            </div>
            <div className={styles.body}>
              <p>{item.body}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Toast;
