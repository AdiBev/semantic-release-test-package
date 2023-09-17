type GreetingType = "Hello" | "Hi"

const saySomething = (param: GreetingType) => {
  console.log(`${param} World!`)
}

export { saySomething }
