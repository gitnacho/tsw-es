import { twoslasher } from "../src/index"

it("extracts custom tags", () => {
  const file = `
// @thing: Ok, por supuesto
const a = "123"
// @thingTwo - Esto debería permanecer (ten en cuenta los no ':')
const b = 12331234
  `
  const result = twoslasher(file, "ts", { customTags: ["thing"] })
  expect(result.tags.length).toEqual(1)

  expect(result.code).toMatchInlineSnapshot(`
    "
    const a = \\"123\\"
    // @thingTwo - Esto debería permanecer (ten en cuenta los no ':')
    const b = 12331234
      "
  `)

  const tag = result.tags[0]
  expect(tag).toMatchInlineSnapshot(`
    Object {
      "annotation": "Ok, por supuesto",
      "line": 1,
      "name": "thing",
    }
  `)
})

it("removes tags which are cut", () => {
  const file = `
// @thing: Ok, por supuesto
const a = "123"
// ---cut---
// @thing: Esta solo es una
const another = ''
    `
  const result = twoslasher(file, "ts", { customTags: ["thing"] })
  expect(result.tags.length).toEqual(1)

  expect(result.code).toMatchInlineSnapshot(`
    "const another = ''
        "
  `)

  const tag = result.tags[0]
  expect(tag).toMatchInlineSnapshot(`
    Object {
      "annotation": "This one only",
      "line": 0,
      "name": "thing",
    }
  `)
})
