import styles from "pages/styles/Modal.module.scss";
import Image from "next/image";
import { getImageSrc } from "utils/utils";
import { Overlay } from "components/Overlay";
import { useState } from "react";

interface props {
  show_modal: boolean;
}

export function Modal(props: props) {
  return (
    <div className={styles.body}>
      {props.show_modal ?<div className={styles.modal}></div>: null}
      {props.show_modal ? <Overlay /> : null}
    </div>
  );
}
