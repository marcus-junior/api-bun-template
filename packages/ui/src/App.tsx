import { createAuthClient } from "better-auth/client";

function App() {

  const authClient = createAuthClient({
    baseURL: "http://localhost:3000"
  });

  const signIn = async () => {
    await authClient.signIn.social({
      provider: "google",
      callbackURL: "http://localhost:5173"
    });
};

  return (
   <> 
   <h1>Seja bem vindo</h1>
   <button onClick={signIn}>Entrar com Google</button>
   </>
  )
}

export default App
