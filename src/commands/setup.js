/******************************************
 *  Author : Muhammad Swalah A A   
 *  Created On : Fri Oct 25 2019
 *  File : setup.js
 *******************************************/

const {
    Command,
    flags
} = require('@oclif/command');

const { cli } = require('cli-ux');
const fs = require("fs-extra");
const path = require('path');

const templateKeys = require('./../util/templateKeys');
const genUtil = new (require('./../util/genUtil'))();

class Setup extends Command {
    async run() {
        this.log(`setting up react-native-assistant\n`);
        this.log('---------------------------------\n\n');

        const CONFIG = this.config;

        const {
            configDir,
            dataDir,
            root,
        } = CONFIG;

        const RESOURCES_OG_PATH = path.join(root, "resources");
        const RESOURCES_DIR = path.join(dataDir, 'resources');

        // initializing user config content object
        const userConfigContent = {};

        // creating user config json file path
        const userConfigFilePath = path.join(this.config.configDir, 'config.json');

        // creating configDir
        await genUtil.createDirIfNotExists(configDir);

        // asking full name. This name will be used in the section of Author in newly created
        // files and components.
        const userFullName = await cli.prompt("Full Name ?");

        // adding full name to user config content.
        userConfigContent["fullName"] = userFullName;
        
        const authorName = await cli.prompt("Author name for components ?");

        userConfigContent["author"] = authorName;

        // writing userConfig file
        fs.writeFileSync(userConfigFilePath, JSON.stringify(userConfigContent));

        // creating dataDir
        await genUtil.createDirIfNotExists(RESOURCES_DIR);

        // copying resources folder to dataDir
        await fs.copySync(RESOURCES_OG_PATH, RESOURCES_DIR);

        this.log("Setup completed");

    }
}

Setup.description = `Setting up react-native-assistant`;

module.exports = Setup;