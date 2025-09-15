import { Context, Elysia, t } from "elysia";
import { openapi } from '@elysiajs/openapi'
import { cors } from '@elysiajs/cors'
import db from "./db/connection";
import { auth } from "./auth";

const betterAuthView = (context: Context) => {

  console.log("Request Method:", context.request.method);

    const BETTER_AUTH_ACCEPT_METHODS = ["POST", "GET"]
    // validate request method
    if(BETTER_AUTH_ACCEPT_METHODS.includes(context.request.method)) {
        return auth.handler(context.request);
    } else {
        context.status(405);
        return { error: "Method Not Allowed" };
    }
}

const app = new Elysia({
  prefix: '/api',
  normalize: true
})
  .use(cors())
  .use(
    openapi({
      documentation: {
        info: {
          title: 'GS App API',
          version: '1.0.50',
          description: 'API básica criada com Elysia e documentação OpenAPI.'
        }
      }
    })
  )
  .decorate('db', db)
  .all("/auth/*", betterAuthView)
  .post(
    '/user',
    ({ body }) => {
      return { message: `Usuário cadastrado com sucesso! ${JSON.stringify(body)}` };
    },
    {
      body: t.Object(
        {
          name: t.String(),
          email: t.String(),
          username: t.String(),
          password: t.String()
        },
        {
          description: 'Cadastra um novo usuário',
        }
      ),
      responses: {
        200: t.Object({
          message: t.String()
        }),
        400: t.Object({
          error: t.String()
        })
      }
    }
  )
  .listen(3000);

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
);

export type App = typeof app;