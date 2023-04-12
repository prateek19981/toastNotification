import styles from "./App.module.css";
import Button from "./components/Button/Button";
import Toast from "./components/Toast/Toast";
import { useState, useEffect } from "react";
import useNotification from "./hooks/useNotification";

function App() {
  const { showNotification, deleteToast, list, setPause } = useNotification();
  return (
    <div className={styles.App}>
      <div className={styles.container}>
        <Button handleClick={() => showNotification("success")}>Success</Button>
        <Button handleClick={() => showNotification("danger")}>Danger</Button>
        <Button handleClick={() => showNotification("info")}>Info</Button>
        <Button handleClick={() => showNotification("warning")}>Warning</Button>
      </div>
      <Toast list={list} deleteToast={deleteToast} setPause={setPause} />
    </div>
  );
}

export default App;
