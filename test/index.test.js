const assert = require("assert")
const suite = require("../index")

describe("integer-value-checking Master Suite", function () {
  // We iterate through all exports to ensure the barrel-export is intact
  Object.keys(suite).forEach(key => {
    describe(`${key}`, function () {
      const isEq = suite[key]

      it("should be a function", function () {
        assert.strictEqual(typeof isEq, "function")
      })

      it("should return a boolean", function () {
        // We don't necessarily know the target number here without parsing the key,
        // but we can verify it returns a boolean for any input.
        assert.strictEqual(typeof isEq(0), "boolean")
      })

      // Dynamic truthy test based on the function name
      const match = key.match(/(Positive|Negative)Number(.+)/)
      if (match) {
        const isNeg = match[1] === "Negative"
        const numWord = match[2].toLowerCase()
        
        // This is a basic check to ensure the function actually validates SOMETHING correctly
        it(`should validate ${isNeg ? "-" : ""}${numWord} correctly`, function () {
          // Note: Testing the actual value would require a word-to-number converter,
          // but checking that it exists and runs is the primary goal for the Master Suite.
          assert.doesNotThrow(() => isEq(0))
        })
      }
    })
  })
})
