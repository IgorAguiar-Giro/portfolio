import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";
import tailwindcss from "eslint-plugin-tailwindcss"; // Import the plugin properly

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  {
    files: ["**/*.ts", "**/*.tsx"],
    plugins: {
      tailwindcss, // Use the imported module here
    },
    rules: {
      "tailwindcss/classnames-order": "warn", // Organizes Tailwind classes
      "tailwindcss/no-custom-classname": "off", // Adjust if you use custom class names
    },
  },
  {
    // Make sure to add this to the config for Tailwind to function correctly
    settings: {
      tailwindcss: {
        // Enable Tailwind CSS IntelliSense (if required)
        config: "./tailwind.config.js", // Adjust path if necessary
      },
    },
  },
];

export default eslintConfig;
