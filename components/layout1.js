import styles from "../styles/layout2.module.css";
import Head from "next/head";
import { useState } from "react";
import { Modal, ModalContent } from "./popmodal";
import Image from "next/image";
import smpic0 from "../images/pexels-gary-spears-250177-sm.png";
import lgpic0 from "../images/pexels-gary-spears-250177-lg.png";
import smpic1 from "../images/pexels-daniel-reche-1556679-sm.png";
import lgpic1 from "../images/pexels-daniel-reche-1556679-lg.png";
import smpic2 from "../images/pexels-barry-plott-753500-sm.png";
import lgpic2 from "../images/pexels-barry-plott-753500-lg.png";

export default function Layout() {
  const [isOpen, setIsopen] = useState(false);
  const showModal = () => setIsopen((prev) => !prev);
  const [isOpen1, setIsopen1] = useState(false);
  const showModal1 = () => setIsopen1((prev) => !prev);
  return (
    <div className={styles.layout}>
      <Head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,200,0,0"
        />
      </Head>
      <section className={styles.navbar}>
        <nav className={styles.nav}>
          <div className={styles.leftNav}>
            <button>
              <span class="material-symbols-outlined">search</span>
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
          <h1 className={styles.title}>
            <span class="material-symbols-outlined">ac_unit</span>Album
            Christmas<span class="material-symbols-outlined">ac_unit</span>
          </h1>
        </div>
        {/* <!-- Album1 --> */}
        <div className={`${styles.album} ${styles.album1}`}>
          <span className={["material-symbols-outlined"]}>bookmark</span>
          <p>Christmas</p>
        </div>
        <div className={styles.row}>
          <div className={styles.col}>
            <Modal onOpen={showModal}>
              <div className="holder">
                <Image src={smpic0} alt="small" width={360} height={200} />
              </div>
            </Modal>
            </div>
            {isOpen&& (
              <ModalContent onClose={() => setIsopen(false)}>
                <Image src={lgpic0} alt="large" width={1000} height={800} />
              </ModalContent>
            )}
          
          <div className={styles.col}>
            <Modal onOpen={showModal}>
              <div className="holder">
                <Image src={smpic0} alt="small" width={360} height={200} />
              </div>
            </Modal>
            {isOpen && (
              <ModalContent onClose={() => setIsopen(false)}>
                <Image src={lgpic0} alt="large" width={1000} height={800} />
              </ModalContent>
            )}
          </div>
          <div className={styles.col}>
            <Modal onOpen={showModal}>
              <div className="holder">
                <Image src={smpic0} alt="small" width={360} height={200} />
              </div>
            </Modal>
            {isOpen && (
              <ModalContent onClose={() => setIsopen(false)}>
                <Image src={lgpic0} alt="large" width={1000} height={800} />
              </ModalContent>
            )}
          </div>
          <div className={styles.col}>
            <Modal onOpen={showModal}>
              <div className="holder">
                <Image src={smpic0} alt="small" width={360} height={200} />
              </div>
            </Modal>
            {isOpen && (
              <ModalContent onClose={() => setIsopen(false)}>
                <Image src={lgpic0} alt="large" width={1000} height={800} />
              </ModalContent>
            )}
          </div>
        </div>
        {/* <!-- Album2 --> */}
        <div className={`${styles.album} ${styles.album1}`}>
          <span className={["material-symbols-outlined"]}>bookmark</span>
          <p>Christmas</p>
        </div>
        <div className={styles.row}>
          <div className={styles.col}>
            <Modal onOpen={showModal1}>
              <div className="holder">
                <Image src={smpic1} alt="small" width={360} height={200} />
              </div>
            </Modal>
            </div>
            {isOpen1 && (
              <ModalContent onClose={() => setIsopen1(false)}>
                <Image src={lgpic1} alt="large" width={1000} height={800} />
              </ModalContent>
            )}
          <div className={styles.col}>
            <Modal onOpen={showModal1}>
              <div className="holder">
                <Image src={smpic1} alt="small" width={360} height={200} />
              </div>
            </Modal>
            {isOpen1 && (
              <ModalContent onClose={() => setIsopen1(false)}>
                <Image src={lgpic1} alt="large" width={1000} height={800} />
              </ModalContent>
            )}
          </div>
          <div className={styles.col}>
            <Modal onOpen={showModal1}>
              <div className="holder">
                <Image src={smpic1} alt="small" width={360} height={200} />
              </div>
            </Modal>
            {isOpen1 && (
              <ModalContent onClose={() => setIsopen1(false)}>
                <Image src={lgpic1} alt="large" width={1000} height={800} />
              </ModalContent>
            )}
          </div>
          <div className={styles.col}>
            <Modal onOpen={showModal1}>
              <div className="holder">
                <Image src={smpic1} alt="small" width={360} height={200} />
              </div>
            </Modal>
            {isOpen1 && (
              <ModalContent onClose={() => setIsopen1(false)}>
                <Image src={lgpic1} alt="large" width={1000} height={800} />
              </ModalContent>
            )}
          </div>
        </div>
        {/* <!-- Album3 --> */}
        {/* <div className={`${styles.album} ${styles.album1}`}>
          <span className={["material-symbols-outlined"]}>bookmark</span>
          <p>Christmas</p>
        </div>
        <div className={styles.row}>
          <div className={styles.col}>
            <Modal onOpen={showModal}>
              <div className="holder">
                <Image src={smpic2} alt="small" width={360} height={200} />
              </div>
            </Modal>
            {isOpen && (
              <ModalContent onClose={() => setIsopen(false)}>
                <Image src={lgpic2} alt="large" width={1000} height={800} />
              </ModalContent>
            )}
          </div>
          <div className={styles.col}>
            <Modal onOpen={showModal}>
              <div className="holder">
                <Image src={smpic2} alt="small" width={360} height={200} />
              </div>
            </Modal>
            {isOpen && (
              <ModalContent onClose={() => setIsopen(false)}>
                <Image src={lgpic2} alt="large" width={1000} height={800} />
              </ModalContent>
            )}
          </div>
          <div className={styles.col}>
            <Modal onOpen={showModal}>
              <div className="holder">
                <Image src={smpic2} alt="small" width={360} height={200} />
              </div>
            </Modal>
            {isOpen && (
              <ModalContent onClose={() => setIsopen(false)}>
                <Image src={lgpic2} alt="large" width={1000} height={800} />
              </ModalContent>
            )}
          </div>
          <div className={styles.col}>
            <Modal onOpen={showModal}>
              <div className="holder">
                <Image src={smpic2} alt="small" width={360} height={200} />
              </div>
            </Modal>
            {isOpen && (
              <ModalContent onClose={() => setIsopen(false)}>
                <Image src={lgpic2} alt="large" width={1000} height={800} />
              </ModalContent>
            )}
          </div>
        </div> */}
      </section>
    </div>
  );
}
