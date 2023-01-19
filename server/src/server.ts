import Fastify from "fastify";
import cors from '@fastify/cors'
import { appRoutes } from "./lib/routes";
const app = Fastify()

/**
 * Método HTTP: Get, Post, Put, Patch, Delete
 * 
 */

app.register(cors);
app.register(appRoutes)


app.listen({ port:3333}).then(() => {
  console.log('HTTP Server Running!')
})