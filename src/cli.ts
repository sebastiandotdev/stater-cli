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
  try {
    const response = await prompts({
      type: 'autocomplete',
      name: 'templates',
      initial: 1,
      message: 'What template would you like to use today?',
      suggest: async (input, choices) => {
        const filteredCharacter = choices.filter(i => i.title.toLowerCase().includes(input.toLowerCase()))

        return filteredCharacter
      },
      choices: [
        { title: 'React tw ts zustand' },
        { title: 'React tw zustand', value: 'silver-fox' },
        // { title: 'Grant', description: 'This option has a description.' },
      ],
    })

    console.log(argv)
    console.log(response)
    console.log('Deploy')
  }
  catch (error) {
    console.log((error as Error).message)
  }
}
