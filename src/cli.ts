import process from 'node:process'
import minimist from 'minimist'
import prompts from 'prompts'

interface ArgvType {
  h: string
  help: string
  v: string
  version: string
}

const argv = minimist<ArgvType>(process.argv.slice(2))

export default async function start() {
  const response = await prompts({
    type: 'list',
    name: 'test',
    message: 'Test with prompt',
  })

  console.log(argv)
  console.log(response)
}
