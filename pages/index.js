import Head from 'next/head'
import { useState } from 'react';
import styles from '../styles/Home.module.css'

export default function Home() {
  
  const [input ,setInput]=useState("");

  function InputHandler(e){
    setInput(e.target.value);
    // console.log(e.target.value);
  }

  function LoginHandler(){
    localStorage.setItem("userID", input); //將userID 值存入localStorage
  }


  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
      <div className={styles.box}>
        <input type="text" id="input" placeholder="Login ID" onChange={InputHandler}/>
        <button type="submit" onClick={LoginHandler}>Login</button>
        <p className={styles.hint}> {input ? "":"Don't have an account"}</p>
        <div className={styles.registerBox}>
            <button>Register</button>
            <button>Continue with Google</button>
        </div>
    </div>
      </main>

      <footer className={styles.footer}>
      <p>All rights reserved content privacy</p>
      </footer>
    </div>
  )
};