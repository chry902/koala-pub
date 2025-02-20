"use client"; // Indica che questo è un Client Component

import { useState } from "react";

const AuthForm = () => {
   // Stato per gestire la modalità (login o registrazione)
   const [isLogin, setIsLogin] = useState(true);

   // Stato per i campi del form
   const [username, setUsername] = useState("");
   const [email, setEmail] = useState("");
   const [password, setPassword] = useState("");
   const [isAdmin, setIsAdmin] = useState(false); // Campo isAdmin

   // Stato per gestire gli errori
   const [error, setError] = useState(null);

   // Stato per gestire il caricamento
   const [isLoading, setIsLoading] = useState(false);

   // Funzione per gestire l'invio del form
   const handleSubmit = async (e) => {
      e.preventDefault();
      setIsLoading(true);
      setError(null);

      const endpoint = isLogin ? "/login" : "/register";
      const body = isLogin
         ? { email, password } // Body per il login
         : { username, email, password, isAdmin }; // Body per la registrazione

      try {
         const response = await fetch(`http://localhost:5001/api/auth/register`, {
            method: "POST",
            headers: {
               "Content-Type": "application/json",
            },
            body: JSON.stringify(body),
         });

         if (!response.ok) {
            const errorData = await response.json();
            throw new Error(errorData.message || "Errore nella richiesta");
         }

         const data = await response.json();

         // Salva il token in localStorage
         localStorage.setItem("token", data.token);

         // Feedback all'utente
         alert(isLogin ? "Login riuscito!" : "Registrazione riuscita!");
         console.log("Dati:", data);
      } catch (error) {
         setError(error.message);
         console.error("Errore:", error.message);
      } finally {
         setIsLoading(false);
      }
   };

   return (
      <div style={styles.container}>
         <h1>{isLogin ? "Login" : "Registrati"}</h1>
         <form onSubmit={handleSubmit} style={styles.form}>
            {!isLogin && (
               <>
                  <input
                     type="text"
                     placeholder="Username"
                     value={username}
                     onChange={(e) => setUsername(e.target.value)}
                     required
                     style={styles.input}
                  />
                  <label style={styles.checkboxLabel}>
                     <input
                        type="checkbox"
                        checked={isAdmin}
                        onChange={(e) => setIsAdmin(e.target.checked)}
                        style={styles.checkbox}
                     />
                     Sono un amministratore
                  </label>
               </>
            )}
            <input
               type="email"
               placeholder="Email"
               value={email}
               onChange={(e) => setEmail(e.target.value)}
               required
               style={styles.input}
            />
            <input
               type="password"
               placeholder="Password"
               value={password}
               onChange={(e) => setPassword(e.target.value)}
               required
               style={styles.input}
            />
            <button type="submit" disabled={isLoading} style={styles.button}>
               {isLoading ? "Caricamento..." : isLogin ? "Login" : "Registrati"}
            </button>
         </form>
         {error && <p style={styles.error}>{error}</p>}
         <p style={styles.toggleText}>
            {isLogin ? "Non hai un account? " : "Hai già un account? "}
            <button
               onClick={() => setIsLogin(!isLogin)}
               style={styles.toggleButton}
            >
               {isLogin ? "Registrati" : "Login"}
            </button>
         </p>
      </div>
   );
};

// Stili inline per il componente
const styles = {
   container: {
      maxWidth: "400px",
      margin: "0 auto",
      padding: "20px",
      border: "1px solid #ccc",
      borderRadius: "8px",
      backgroundColor: "#f9f9f9",
   },
   form: {
      display: "flex",
      flexDirection: "column",
      gap: "10px",
   },
   input: {
      padding: "10px",
      borderRadius: "4px",
      border: "1px solid #ccc",
   },
   button: {
      padding: "10px",
      borderRadius: "4px",
      border: "none",
      backgroundColor: "#0070f3",
      color: "#fff",
      cursor: "pointer",
   },
   error: {
      color: "red",
      textAlign: "center",
   },
   toggleText: {
      textAlign: "center",

   },
   toggleButton: {
      background: "none",
      border: "none",
      color: "#0070f3",
      cursor: "pointer",
      textDecoration: "underline",
   },
   checkboxLabel: {
      display: "flex",
      alignItems: "center",
      gap: "10px",
      color: "#000000",
      cursor: "pointer",
   },
   checkbox: {
      width: "16px",
      height: "16px",
      color: "ffff",
      cursor: "pointer",
   },
};

export default AuthForm;