import prompts from 'prompts'

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
        { title: 'React with tailwind, typescript and zustand' },
        { title: 'React with zustand y tailwind' },
      ],
    })

    console.log(response)
  }
  catch (error) {
    console.log((error as Error).message)
  }
}
