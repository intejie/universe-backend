import fastify from 'fastify'

const server = fastify()
const PORT = parseInt(process.env.PORT!) || 8080

server.listen({ port: PORT }, (err, address) => {
   if (err) {
      console.error(err)
      process.exit(1)
   }
   console.log(`Server listening at ${address}`)
})