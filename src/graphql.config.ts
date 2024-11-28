import type { IGraphQLConfig } from "graphql-config";

const config: IGraphQLConfig = {
    schema: {
        "https://api.crm.refine.dev/graphql": {
            headers: {
                // Add any authentication headers if needed
            },
        },
    },
    extensions: {
        codegen: {
        hooks: {
            afterOneFileWrite: ["eslint --fix", "prettier --write"],
        },
        generates: {
            "src/generated/graphql/schema.types.ts": {
                plugins: ["typescript"],
                config: {
                    skipTypename: true,
                    enumsAsTypes: true,
                    scalars: {
                        DateTime: {
                            input: "string",
                            output: "string",
                            format: "date-time",
                        },
                    },
                },
            },
            "src/generated/graphql/types.ts": {
            preset: "import-types",
            documents: ["src/graphql/mutations.ts", "src/graphql/queries.ts"],
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
        },
        },
    },
};

export default config;