# Microfrontend Livia Boilerplate

Este é um projeto de exemplo estruturado com [Module Federation](https://webpack.js.org/concepts/module-federation/) do Webpack 5+.

E modo de desenvolvimento, devemos sempre executar por último a aplicação que irá reunir os microfrontends.
Para a configuração dos módulos a serem compilados em tempo de build utilizaremos o Plugin de Module Federation no `webpack.config.js`:
```
webpack.config.js
...
}
    plugins: [
        new ModuleFederationPlugin({
            name: 'container',
            remotes: {
                appOne: 'appOne@http://localhost:3001/remoteEntry.js',
                appTwo: 'appTwo@http://localhost:3002/remoteEntry.js',
            },
            // Nome do arquivo que será exposto à aplicação que juntará os módulos.
            filename: "remoteEntry.js",
            shared: {
                // Configaração de pacotes compartilhados
                react: { singleton: true, requiredVersion: deps.react },
                'react-dom': { singleton: true, requiredVersion: deps['react-dom'] },
            },
            exposes: {
                // Exposição de arquivos do módulo (Ex: Store, Components, Utils...)
                "./CounterComp": "./src/components/CounterComp",
                "./counter": "./src/hooks/counter",
            },
        }),
    ],
...
```

## Scripts Disponíveis

### `npm i` ou `yarn`
Comando para instalação dos pacotes.

### `npm start` ou `yarn start`
Para rodar os apps em modo de desenvolvimento.
(Lembrar de mapear os microfrontends em portas diferentes e rodar a aplicação principal por **último**):


## Code Style
ESLint, Prettier e Typescript.
Utilizamos uma [cofiguração preferencial](https://www.npmjs.com/package/@dasa-health/eslint-config-dasa-health-js) da Dasa para o ESLint. Configurações essas que podem ser personalizadas via overrides:

### Dasa ESLint Config Peer Dependencies

` $ yarn add -D @typescript-eslint/eslint-plugin@^2.10.0 @typescript-eslint/parser@^2.10.0 eslint@^6.7.1 eslint-plugin-react@^7.16.0 eslint-plugin-react-hooks@^2.3.0 prettier@2.0.5`

### Overrides Rules Example
```
{
...
    "overrides": [
        {
            "files": ["src/packages/app/__mocks__/*.js"],
            "rules": {
                "react/no-multi-comp": "off"
            }
        }
    ]
...
}
```
Na raiz temos alguns exemplos de `.prettierrc` e `.tsconfig`.

