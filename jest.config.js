//To bring .env.development variables to Jest
const dotenv = require("dotenv");
dotenv.config({ path: ".env.development" });
//

const nextJest = require("next/jest");

const createJestConfig = nextJest({
  path: ".",
});
const jestConfig = createJestConfig({
  moduleDirectories: ["node_modules", "<rootDir>"],
  testTimeout: 60000,
});

module.exports = jestConfig;