import React from "react";
import styles from "./sideBar.module.css";
function SideBar() {
  return <aside className={styles.container}>
    <ul className={styles.menu}>
      <li className={styles.menuItem}>inicio</li>
      <li className={styles.menuItem}>acerca de</li>
      <li className={styles.menuItem}>contacto</li>
    </ul>
  </aside>;
}

export default SideBar;
