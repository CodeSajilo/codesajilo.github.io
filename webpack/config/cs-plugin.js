module.exports = class CsPlugin {
    constructor(options) {
        this.options = options;
        console.log('CsPlugin constructor', options);
    }

    apply(compiler) {
        console.log('cs plugin compiler::::', typeof compiler);
    }
}