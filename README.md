# Paper Volleyball website

This is the React and TypeScript website for Paper Volleyball. It is published
as a project site at <https://freegiftstudio.ca/paper-volleyball/>.

## Shared domain ownership

The `freegiftstudio.ca` domain root is owned and deployed by the shared Free
Gift Studio GitHub Pages repository:

<https://github.com/Isthatok74/isthatok74.github.io>

That root repository owns the developer landing page, custom-domain `CNAME`,
and root-level `app-ads.txt` used across the studio's projects. Do not add a
separate `CNAME` or `app-ads.txt` to this repository. Changes to the developer
landing page, domain configuration, or authorized-seller entries belong in the
shared root repository.

This repository remains responsible for the Paper Volleyball project page and
build output beneath `/paper-volleyball/`. The Vite `base` setting must remain
`/paper-volleyball/` so generated asset URLs work at that path.

## Deployment

### Testing

Run `npm run dev` from the project directory and open
<http://localhost:5173>. The page reloads when source files change.

### Publishing

GitHub Pages publishes this repository's `docs/` directory when the built
output is pushed to `main`. On Windows, `build.bat` runs the production build
and refreshes `docs/`. Commit source changes and regenerated `docs/` output
together before pushing.

The project page is served through the custom domain configured by the shared
root repository; this repository does not independently configure
`freegiftstudio.ca`.


<details>
<summary>Additional information</summary>

# Appendix

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default tseslint.config({
  languageOptions: {
    // other options...
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
})
```

- Replace `tseslint.configs.recommended` to `tseslint.configs.recommendedTypeChecked` or `tseslint.configs.strictTypeChecked`
- Optionally add `...tseslint.configs.stylisticTypeChecked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and update the config:

```js
// eslint.config.js
import react from 'eslint-plugin-react'

export default tseslint.config({
  // Set the react version
  settings: { react: { version: '18.3' } },
  plugins: {
    // Add the react plugin
    react,
  },
  rules: {
    // other rules...
    // Enable its recommended rules
    ...react.configs.recommended.rules,
    ...react.configs['jsx-runtime'].rules,
  },
})
```

</details>
