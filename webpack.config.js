const path = require('path'); 

module.exports = {
    entry: './index.js', 
    output: {
        // mode: "development",
        path: path.resolve(__dirname, 'dist'), 
        filename: 'bundle.js', 
    },
}