import { Store } from "react-notifications-component";
import "react-notifications-component/dist/theme.css";

export function SuccessNotification(successMsg) {
  Store.addNotification({
    title: "Successfull",
    message: successMsg,
    type: "success", // "success", "danger", "info", "default", "warning"
    container: "top-right", // "top-left", "top-right", "bottom-left", "bottom-right"
    insert: "top", // "top", "bottom"
    animationIn: ["animate__animated", "animate__fadeIn"], // see animate.css for other animations
    animationOut: ["animate__animated", "animate__fadeOut"],
    dismiss: {
      duration: 3000,
      onScreen: true,
    },
  });
}

export function ErrorNotification(successMsg) {
  Store.addNotification({
    title: "Oops",
    message: successMsg,
    type: "danger", // "success", "danger", "info", "default", "warning"
    container: "top-right", // "top-left", "top-right", "bottom-left", "bottom-right"
    insert: "top", // "top", "bottom"
    animationIn: ["animate__animated", "animate__fadeIn"], // see animate.css for other animations
    animationOut: ["animate__animated", "animate__fadeOut"],
    dismiss: {
      duration: 3000,
      onScreen: true,
    },
  });
}
