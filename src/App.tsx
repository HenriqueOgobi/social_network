import React from "react";
import { Post } from "./Post";
import styles from "./App.module.css"
import './global.css'
import { Header } from "./components/Header";
import { Sidebar } from "./components/Sidebar";


export function App() {
  return (
    <>
    <Header/>

     <div className={styles.wrapper}>
      <Sidebar/>
      <main>
        <Post
        author="Diego Fernandes"
        content="Lorem ipsum dolor sit amet,ur, molestiae sunt? "
      />
      <Post
        author="Paulo dor de cutuvaz"
        content="Lorem ipsum dolor sit amet,ur, molestiae sunt? "
      /></main>
     
     </div>
     
    </>
  );
}

//export default App;
