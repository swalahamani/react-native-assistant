/******************************************
 *  Author : Muhammad Swalah A A   
 *  Created On : Fri Oct 25 2019
 *  File : genUtil.js
 *******************************************/

const fs = require("fs-extra");
const templateKeys = require('./templateKeys');

class GenUtil {

    async createDirIfNotExists(dirPath) {
        if(!fs.existsSync(dirPath)) {
            fs.mkdirpSync(dirPath);
        }
    }
}

module.exports = GenUtil;