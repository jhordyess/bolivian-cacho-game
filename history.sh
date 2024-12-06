#? Commands history

# Install global npm package for npm
sudo npm i -g npm

# Install required packages for React development
yarn add react react-dom

# Transpiler with Babel
yarn add -D @babel/core @babel/preset-env @babel/preset-react babel-loader &&
  npm pkg set babel.presets="['@babel/preset-env','@babel/preset-react']"

# Bundler with Webpack
yarn add -D webpack webpack-cli webpack-dev-server
yarn add -D html-webpack-plugin
yarn add -D mini-css-extract-plugin css-loader style-loader
yarn add -D css-minimizer-webpack-plugin terser-webpack-plugin clean-webpack-plugin
yarn add -D cname-webpack-plugin
touch webpack.config.dev.js webpack.config.prod.js &&
  npm pkg set scripts.dev="webpack serve --config webpack.config.dev.cjs" &&
  npm pkg set scripts.build="yarn lint && webpack --config webpack.config.prod.cjs"

# Styling with Tailwind CSS
yarn add -D tailwindcss postcss-loader autoprefixer &&
  yarn tailwindcss init -p

# Formatter with Prettier
yarn add -D prettier prettier-plugin-tailwindcss &&
  touch .prettierrc.json &&
  npm pkg set scripts.format="prettier --write ."

# Linter with ESLint
yarn add -D eslint && yarn eslint --init &&
  npm pkg set scripts.lint="eslint ."

# Local server with serve
yarn add -D serve &&
  npm pkg set scripts.start="yarn build && serve -s dist -l 3000"

# Git hooks with Husky
yarn add -D husky &&
  yarn husky &&
  touch .husky/pre-push && cat "yarn lint" > .husky/pre-push &&
  npm pkg set scripts.postinstall="husky"

# Extra packages
yarn add lodash xstate @xstate/react

# Update yarn
corepack enable
yarn set version stable
yarn install
yarn upgrade-interactive
