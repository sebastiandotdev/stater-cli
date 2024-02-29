import process from 'node:process'
import { cac } from 'cac'
import { version } from '../package.json'

export default async function start() {
  const cli = cac('new-app')

  cli.help()
  cli.version(version)

  cli.parse(process.argv, { run: false })
  await cli.runMatchedCommand()
}
