type GreetingType = "Hello" | "Hi"

const saySomething = (param: GreetingType) => {
  console.log(`${param} World!`)
}

const addAnother = () => console.log("hello")

const addAnother1 = () => console.log("hello")

export { saySomething, addAnother, addAnother1 }
