
//--------------------------------------------------------------------------- GET: Recupera dati
export default async function getData(url) {
   try {
      const res = await fetch(`http://localhost:5001/api/menu?${url}`);
      if (!res.ok) {
         throw new Error(`Errore HTTP: ${res.status} ${res.statusText}`);
      }
      const data = await res.json();

      return data;
   } catch (error) {
      console.error("Errore durante il recupero dei dati:", error.message);
      throw new Error(`Errore durante il recupero dei dati: ${error.message}`);
   }
}

