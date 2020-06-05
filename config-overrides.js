const {
    disableEsLint,
    addDecoratorsLegacy,
    override,
} = require("customize-cra");

module.exports = override(
    disableEsLint({
        extends: "react-app",
        parserOptions: {
            ecmaFeatures: {
                legacyDecorators: true,
            },
        },
    }),
    addDecoratorsLegacy()
);
