import styles from '../styles/album.module.css';
import Head from 'next/head';
import { useState } from 'react';

export default function Layout(){

const [title, setTitle]=useState("");
const [email,setEmail]=useState("");

async function getTitle(){

    try{
        let response = await fetch("https://jsonplaceholder.typicode.com/users/1");
        let data= await response.json();
        setTitle(data.name);
        setEmail(data.email);
        console.log(title);
        console.log(email);

        
    }catch (error){
        console.log(error);    }
}

getTitle();

    return(
    <div className={styles.layout}>
    <Head>
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,200,0,0" />
    </Head>
        <section className={styles.navbar}>
    <nav className={styles.nav}>
        <div className={styles.leftNav}>
            <button>
            <span class="material-symbols-outlined">
                search
                </span>
            </button>
        </div>
        <div className={styles.rightNav}>
            <button>Sunmit Photo +</button>
            <button>
                <span class="material-symbols-outlined">notifications</span>
                </button>
        </div>
    </nav>
   </section>
   <section className={styles.main}>
   <div className={styles.headline}>
        <h1 className={styles.title}>{title}</h1>
        <a className={styles.email} href="${email}"><span class="material-symbols-outlined">mail</span>{email}</a>
    </div>
    {/* <!-- Album1 --> */}
    <div className={`${styles.album} ${styles.album1}`}>
        <span className={["material-symbols-outlined"]}>bookmark</span>
        <p>GALAXY</p></div>
    <div className={styles.row}>
        <div className={`${styles.col} ${styles.pic1}`}></div>
        <div className={`${styles.col} ${styles.pic2}`}></div>
        <div className={`${styles.col} ${styles.pic3}`}></div>
        <div className={`${styles.col} ${styles.pic4}`}></div>
    </div>
    {/* <!-- Album2 --> */}
    <div className={`${styles.album} ${styles.album1}`}>
        <span className={["material-symbols-outlined"]}>bookmark</span>
        <p>GALAXY</p></div>
    <div className={styles.row}>
        <div className={`${styles.col} ${styles.pic1}`}></div>
        <div className={`${styles.col} ${styles.pic2}`}></div>
        <div className={`${styles.col} ${styles.pic3}`}></div>
        <div className={`${styles.col} ${styles.pic4}`}></div>
    </div>
    {/* <!-- Album3m--> */}
    <div className={`${styles.album} ${styles.album1}`}>
        <span class="material-symbols-outlined">bookmark</span>
        <p>GALAXY</p></div>
    <div className={styles.row}>
        <div className={`${styles.col} ${styles.pic1}`}></div>
        <div className={`${styles.col} ${styles.pic2}`}></div>
        <div className={`${styles.col} ${styles.pic3}`}></div>
        <div className={`${styles.col} ${styles.pic4}`}></div>
    </div>
   </section>

    </div>)
};
