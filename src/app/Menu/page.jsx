import styles from "./page.module.scss";
import Image from "next/image";
import kcc from "../../../public/imagesKoala/imgPaninoKcc.jpeg";
import Link from "next/link";



export default async function Menu() {
   return (
      <div className={styles.menuContainer}>
         <div className={styles.menuHero}>

            <Image src={kcc} alt="kcc" priority quality={100} />

         </div>

         <div className={styles.menuWrapper}>

            <div className={styles.menuFood}>
               <Link href="/FoodPage">
                  <h2>Food</h2>
               </Link>
            </div>

            <div className={styles.menuDrink}>
               <Link href="/DrinkPage">
                  <h2>Drink</h2>
               </Link>
            </div>

         </div>
      </div>
   );
}
