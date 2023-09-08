type GreetingType = "Hello" | "Hi" | "Hola"

const saySomething = (param: GreetingType) => {
  console.log(`${param} World!`)
}

export { saySomething }
