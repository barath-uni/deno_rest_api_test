import { Application } from 'https://deno.land/x/oak/mod.ts'
import router from './routes.ts'
const app = new Application()

const port = 8001

app.use(router.routes())
app.use(router.allowedMethods())

console.log("The server is running well!!")

await app.listen({port})