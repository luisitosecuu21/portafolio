// Layout.js
import React from "react";
import styles from "./layout.module.css";
import SideBar from "../aside/SideBar";

const Layout = ({ children }) => {
  return (
    <div className={styles.container}>
      <aside className={styles.sidebar}>
        <SideBar />
      </aside>
      <main className={styles.mainContent}>
        {children}
      </main>
    </div>
  );
};

export default Layout;
