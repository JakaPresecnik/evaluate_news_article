import { checkForName } from "../src/client/js/nameChecker"
import { handleSubmit } from "../src/client/js/formHandler"

describe("Testing the API call function", () => {
  test("Testing that API call function is defined", async () => {
    expect(checkForName).toBeDefined()
  })
  test('Testing that the data returned is an object', async () => {
     const data = await checkForName;
     expect(data).toBeInstanceOf(Object)
  })
})

describe("Testing the submit function", () => {
  test("Testing the submit function", () => {
    expect(handleSubmit).toBeDefined()
})})
