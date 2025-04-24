import eslintPlugin from "@eslint/js";
import tsPlugin from "@typescript-eslint/eslint-plugin";
import tsParser from "@typescript-eslint/parser";

export default [
  {
    files: ["**/*.ts", "**/*.tsx"],
    ignores: ["dist/**", "node_modules/**"],
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        project: ["./backend/tsconfig.json", "./webapp/tsconfig.eslint.json"],
        tsconfigRootDir: process.cwd(),
      },
      ecmaVersion: "latest",
      globals: {
        console: "readonly",
        process: "readonly",
        module: "readonly",
        __dirname: "readonly",
        require: "readonly",
        document: "readonly",
        window: "readonly",
        describe: "readonly",
        it: "readonly",
        expect: "readonly",
      },
    },
    plugins: {
      "@typescript-eslint": tsPlugin,
    },
    rules: {
      ...eslintPlugin.configs.recommended.rules,
      ...tsPlugin.configs.recommended.rules,
      curly: ["error", "all"],
    },
  },
];
