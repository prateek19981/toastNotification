import { useState, useEffect } from "react";
function useNotification() {
  const [list, setList] = useState([]);
  const [pause, setPause] = useState(false);

  useEffect(() => {
    let id = setInterval(() => {
      if (!pause) {
        deleteToast(list[0]?.id);
      }
    }, 2000);

    return () => {
      clearInterval(id);
    };
  }, [list, pause]);

  function showNotification(type, message = "default message") {
    let color = {
      success: "lightgreen",
      danger: "red",
      info: "lightblue",
      warning: "orange",
    };
    setList((p) => {
      return [
        ...p,
        {
          id: new Date().getTime(),
          title: type,
          body: message,
          background: color[type],
        },
      ];
    });
  }
  function deleteToast(id) {
    setList(list.filter((item) => item.id !== id));
  }
  return {
    showNotification,
    deleteToast,
    list,
    setPause,
  };
}

export default useNotification;
