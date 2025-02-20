
import styles from "./styles.module.scss"
import ItemFoodStandard from "../components/itemFoodStandard/index.jsx"
import getData from "../components/utility/apiService/apiService.jsx"

export default async function FoodPage() {

   let items
   try {
      const data = await getData("category=antipasti");
      items = data
      console.log(data);

   } catch (error) {
      return <div>Si è verificato un errore: {error.message}</div>;
   }
   console.log(items);

   return (
      <div className={styles.containerFoodPage}>
         <div>
            {items && items.map((item) => (
               <ItemFoodStandard
                  key={item._id}
                  id={item._id}
                  name={item.name}
                  description={item.description}
                  price={item.price} />))}
         </div>
      </div>
   );

}
{/* <ItemFoodStandard id={items[0]._id} name={items[0].name} description={items[0].description} price={items[0].price} /> */ }

