export * from "./client.js"
export * from "./server.js"

import { createDVPNYXcodeClient } from "./client.js"
import { createDVPNYXcodeServer } from "./server.js"
import type { ServerOptions } from "./server.js"

export async function createDVPNYXcode(options?: ServerOptions) {
  const server = await createDVPNYXcodeServer({
    ...options,
  })

  const client = createDVPNYXcodeClient({
    baseUrl: server.url,
  })

  return {
    client,
    server,
  }
}
