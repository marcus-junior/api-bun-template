import { treaty } from "@elysiajs/eden"
import type { App } from '@gs-app/api';

function App1() {

  const client = treaty<App>('localhost:3000')

  client.api.user.post({
    name: "Marcus",
    email: "marcus@example.com",
    username: "marcus123",
    password: "securepassword"
  })



  return (
   <h1>Hello World</h1>
  )
}

export default App1
