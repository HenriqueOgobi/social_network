import React from "react";
import { Post } from "../src/components/Post";
import { Sidebar } from "./components/Sidebar";
import { Header } from "./components/Header";

import styles from "./App.module.css";
import "./global.css";

export function App() {
  return (
    <>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post
            author="Diego Fernandes"
            content="Lorem ipsum dolor sit amet,ur, molestiae sunt? "
          />
        </main>
      </div>
    </>
  );
}

//export default App;
