module.exports = function(source) {
    return `export default () => console.log("${source}")`;
}