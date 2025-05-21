import { defineFunction } from "@aws-amplify/backend";

export const sayHelloFunc = defineFunction({
  name: "my-first-function",
  entry: "./handler.ts"
});