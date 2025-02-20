import styles from "./styles.module.scss"
const itemFoodStandard = ({ _id, name, description, price }) => {
   const id = _id || "id";

   const namePiatto = name || "name";
   const descriptionPiatto = description || "description";
   const pricePiatto = price || "price";
   // const imageUrlPiatto = imageUrl || "imageUrl";

   return (
      <div key={id} className={styles.containerItems}>
         <h3 className={styles.itemName}>nome: {namePiatto}</h3>
         <p className={styles.itemDescription}>descrizione:{descriptionPiatto}</p>
         <p className={styles.itemPrice}>€{pricePiatto}</p>

      </div>
   );
}

export default itemFoodStandard