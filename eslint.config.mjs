import { FlatCompat } from "@eslint/eslintrc";
import { dirname } from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: {},
});

const eslintConfig = [
  ...compat.config({
    extends: ["next/core-web-vitals"],
    plugins: ["import"],
    "overrides": [
    {
      // Aplica solo a archivos de componentes
      "files": ["**/components/**/*.tsx"],
      "rules": {
        "import/no-named-export": "error" // Fuerza export default solo en componentes
      }
    },],
    rules: {
      "no-console": "error",
      "no-unused-vars": "error",
      "import/order": [
        "error",
        {
          groups: [
            ["builtin", "external"],
            "internal",
            ["sibling", "parent"],
            "index",
          ],
          pathGroups: [
            {
              pattern: "react",
              group: "builtin",
              position: "before",
            },
          ],
          alphabetize: {
            order: "asc",
            caseInsensitive: true,
          },
          "newlines-between": "always",
        },
      ],
    },
  }),
];

export default eslintConfig;