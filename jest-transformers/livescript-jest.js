const livescript = require("livescript");

module.exports = {
    process(sourceText, sourcePath) {
        let compiled = livescript.compile(sourceText, {
            bare: true,
        });

        return {
            code: compiled,
        };
    },
};
