"use client"
import Image from "next/image";
import kolaHero from "../../public/images/copertina-desktop.jpg";
import Logo from "../../public/imagesMenu/logoNews.png";
import koalaHamburger1 from "../../public/imagesMenu/koalaHamburger1.jpg";
import koalaPizza1 from "../../public/imagesMenu/koalaPizza1.jpg"
import koalaPasta1 from "../../public/imagesMenu/koalaPasta1.jpg";
import koalaBirra1 from "../../public/imagesMenu/koalaBirra1.jpg";
import koalaContatti1 from "../../public/imagesMenu/koalaContatti1.jpg";
import koalaNews1 from "../../public/imagesMenu/koalaNews1.jpg";
import koalaGallery1 from "../../public/imagesMenu/koalaGallery1.jpg";
import koalaDelivery1 from "../../public/imagesMenu/koalaDelivery1.jpg";
import koalaCocktail1 from "../../public/imagesMenu/koalaCocktail1.jpg";
import styles from "./page.module.scss";
import Link from "next/link";
import { useState, useEffect } from "react";


const imageArray = [koalaBirra1, koalaHamburger1, koalaPizza1, koalaPasta1, koalaCocktail1]

export default function Home() {
  const [count, setCount] = useState(0)
  useEffect(() => {
    const interval = setTimeout(() => {
      setCount((prevCount) => (prevCount + 1) % imageArray.length);
    }, 5000);

    return () => clearTimeout(interval);
  }, [count]);

  return (
    <div className={styles.page}>
      <main className={styles.main}>

        <div className={styles.heroImageContainer}>
          <Image className={styles.heroImage} src={kolaHero} alt="koala hero image" priority
            fill={true} quality={100} />
        </div>

        <div className={styles.container}>

          <div className={`${styles.logo} ${styles.item0}`}>
            <Image
              src={Logo}
              alt="koala logo"
              width={150}
              height={150}
              priority

              quality={100}
            />
          </div>

          <div className={styles.item1}>
            <Link href="/News">
              <div className={styles.images}>
                <Image
                  src={koalaNews1}
                  alt="koala hamburger"
                  priority

                  quality={100}
                />
              </div>
              <div className={styles.titleContainer}>
                <h2>News</h2>
              </div>
            </Link>

          </div>

          <div className={styles.item2}>
            <Link href="/Gallery">
              <div className={styles.images}>
                <Image
                  src={koalaGallery1}
                  alt="koala hamburger"
                  priority

                  quality={100}
                />
              </div>
              <div className={styles.titleContainer}>
                <h2>Gallery</h2>
              </div>
            </Link>

          </div>

          <div className={styles.item3}>
            <Link href="/Menu">
              <div className={styles.images}>
                <Image
                  src={imageArray[count]}
                  alt="koala hamburger"
                  priority
                  quality={100}
                />
              </div>
              <div className={styles.titleContainer}>
                <h2>Menu</h2>
              </div>
            </Link>
          </div>

          <div className={styles.item4}>
            <Link href="/Asporto">
              <div className={styles.images}>
                <Image
                  src={koalaDelivery1}
                  alt="koala Asporto"
                  priority

                  quality={100}
                />
              </div>
              <div className={styles.titleContainer}>
                <h2>Asporto</h2>
              </div>
            </Link>
          </div>

          <div className={styles.item5}>
            <Link href="/Contatti">
              <div className={styles.contatti}>

                <div className={styles.images}>
                  <Image
                    src={koalaContatti1}
                    alt="koala contatti"
                    priority
                    quality={100}
                  />
                </div>

                <div className={styles.titleContainer}>
                  <h2>Contatti</h2>
                </div>

              </div>
            </Link>
          </div>

        </div>
      </main>

    </div>
  );
}
