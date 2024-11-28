import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  overwrite: true,
  schema: "https://api.crm.refine.dev/graphql",
  documents: ["src/graphql/mutations.ts", "src/graphql/queries.ts"],
  generates: {
    "src/generated/graphql/schema.types.ts": {
      plugins: ["typescript"],
      config: {
        skipTypename: true,
        enumsAsTypes: true,
        scalars: {
          DateTime: "string",
        },
      },
    },
    "src/generated/graphql/types.ts": {
      preset: "import-types",
      plugins: ["typescript-operations"],
      config: {
        skipTypename: true,
        enumsAsTypes: true,
        preResolveTypes: false,
        useTypeImports: true,
      },
      presetConfig: {
        typesPath: "./schema.types",
      },
    },
    "src/generated/graphql/hooks.ts": {
      plugins: ["typescript-react-apollo"],
      config: {
        withHooks: true,
        withHOC: false,
        withComponent: false,
        reactApolloVersion: 3,
      },
    },
  },
  hooks: {
    afterOneFileWrite: ["eslint --fix", "prettier --write"],
    afterStart: ["echo 'Starting Codegen...'"],
  },
};

export default config;
