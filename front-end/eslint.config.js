import { defineConfig, globalIgnores } from "eslint/config";
import js from "@eslint/js";
import globals from "globals";
import react from "eslint-plugin-react";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import jsxA11y from "eslint-plugin-jsx-a11y";
import tseslint from "typescript-eslint";

export default defineConfig([
  globalIgnores(["dist", "node_modules", "eslint.config.js", "vite.config.ts"]),

  // Bas TS + JS + React
  ...tseslint.configs.recommendedTypeChecked,

  {
    files: ["**/*.{ts,js}"], // ← gäller .ts och .js
    languageOptions: {
      parserOptions: {
        project: ["./tsconfig.app.json",
          "./tsconfig.node.json"],
        tsconfigRootDir: import.meta.dirname,
      },
      globals: {
        ...globals.browser,
        ...globals.node,
      },
    },  
    plugins: {
      react,
      "react-hooks": reactHooks,
      "react-refresh": reactRefresh,
      "jsx-a11y": jsxA11y,
    },
    rules: {
      ...js.configs.recommended.rules,
      "no-undef": "off", // TS sköter undefined-varningar; undvik falsklarm i TS/TSX

      // TS-regler som ska vara strikta i .ts
      "@typescript-eslint/explicit-function-return-type": "error",
      "@typescript-eslint/no-unused-vars": [
        "error",
        { argsIgnorePattern: "^_" },
      ],
    },
  },

  {
    files: ["**/*.tsx"], // ← gäller enbart TSX-komponenter
    languageOptions: {
      parserOptions: {
        project: [ "./tsconfig.app.json",
          "./tsconfig.node.json" ],
        tsconfigRootDir: import.meta.dirname,
      },
      globals: {
        ...globals.browser,
        ...globals.node,
      },
    },
    plugins: {
      react,
      "react-hooks": reactHooks,
      "react-refresh": reactRefresh,
      "jsx-a11y": jsxA11y,
    },
    settings: {
      react: { version: "detect" },
    },
    rules: {
      ...js.configs.recommended.rules,
      "no-undef": "off", // viktigt i TSX för nya JSX-transformen

      // Stäng av just explicit-return-type här
      "@typescript-eslint/explicit-function-return-type": "error",

      // Resten av React/A11y-regler
      "react/react-in-jsx-scope": "off",
      "react/jsx-uses-react": "off",
      "react-hooks/rules-of-hooks": "error",
      "react-hooks/exhaustive-deps": "warn",
      "jsx-a11y/alt-text": "warn",
      "react-refresh/only-export-components": [
        "warn",
        { allowConstantExport: true },
      ],
    },
  },
]);
