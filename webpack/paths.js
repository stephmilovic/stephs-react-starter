const path = require('path');

module.exports = {
    root: path.resolve(__dirname, '../'),
    src: path.resolve(__dirname, '../src'),
    outputPath: path.resolve(__dirname, '../', 'dist'),
    templatePath: path.resolve(__dirname, '../', 'src/template.html'),
    helpers: path.resolve(__dirname, '../', 'src/styles/base/_helpers.scss'),
    imagesFolder: 'images',
    fontsFolder: 'fonts',
    cssFolder: 'css',
    jsFolder: 'js',
};
