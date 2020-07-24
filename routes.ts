import { Router } from 'https://deno.land/x/oak/mod.ts'
import { getServerResponse, postServerRequest } from "./controller.ts"

const router = new Router()

router.get('/api/v1/response', getServerResponse)
router.post('/api/v1/postreq:id', postServerRequest)

export default router