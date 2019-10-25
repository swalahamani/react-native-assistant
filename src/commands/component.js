/******************************************
 *  Author : Muhammad Swalah A A   
 *  Created On : Fri Oct 25 2019
 *  File : component.js
 *******************************************/
const {
    Command,
    flags
} = require('@oclif/command');

const genUtil = new (require('./../util/genUtil'))();

const fs = require("fs-extra");
const path = require("path");

const constants = require('./../util/constants');
const templateKeys = require('./../util/templateKeys');

class Component extends Command {
    async run() {
        const { flags } = this.parse(Component);

        const {
            // name of component going to create.
            name
        } = flags;

        if (name.length > 0) {
            const userConfig = await fs.readJSON(path.join(this.config.configDir, 'config.json'));
            const config = this.config;

            const {
                configDir,
                dataDir
            } = config;

            const RESOURCES = "resources";
            const RESOURCES_DIR = path.join(dataDir, RESOURCES);
            const TEMPLATE_DIR = path.join(RESOURCES_DIR, "templates");
            const COMPONENT_TEMPLATE_DIR = path.join(TEMPLATE_DIR, 'component');

            const TEMPLATE_CONFIG_FILE_PATH = path.join(COMPONENT_TEMPLATE_DIR, constants.TEMPLATE_CONFIG_FILE_NAME);

            if (fs.existsSync(TEMPLATE_CONFIG_FILE_PATH)) {
                const templatesConfig = JSON.parse(fs.readFileSync(TEMPLATE_CONFIG_FILE_PATH, 'utf-8'));

                this.createComponent(name, userConfig, COMPONENT_TEMPLATE_DIR, templatesConfig);
            } else {
                this.error(`No ${constants.TEMPLATE_CONFIG_FILE_NAME} found`);
            }
        } else {
            this.error("No component name specified /!\\");
        }
    }


    createComponent(componentName, userConfig, componentTemplateDir, templatesConfig) {

        const templatesConfigKeys = Object.keys(templatesConfig);
        const componentPath = "./" + componentName + "/";

        if (this.createDir(componentPath)) {
            templatesConfigKeys.every((templateConfigKey, index) => {
                const {
                    isEnabled,
                    fileName: fileNameTemplate,
                    extension,
                } = templatesConfig[templateConfigKey];

                if (isEnabled) {
                    const templateFilePath = path.join(componentTemplateDir, templateConfigKey);
                    const fileName = this.cookFileName(
                        fileNameTemplate,
                        userConfig,
                        componentName
                    );

                    const fileContent = this.cookFileContent(
                        fileName,
                        extension,
                        componentName,
                        userConfig,
                        templateFilePath
                    );

                    return this.createFile(
                        componentPath,
                        fileName,
                        extension,
                        fileContent
                    );
                }
            });
        }
    }

    createFile(path, fileName, extension, content, shouldPrintErr = true) {
        let filePath = path + fileName + extension;
        let rs = false;
        if (!fs.existsSync(filePath)) {
            try {
                fs.writeFileSync(filePath, content, 'utf8');
                rs = true;
            } catch (error) {
                rs = false;
                if (shouldPrintErr) {
                    console.error(error);
                }
            }
        } else {
            rs = false;

            if (shouldPrintErr) {
                console.log('Err: creating file: ' + filePath);
            }
        }

        return rs;
    }

    cookFileContent(fileName, extension, componentName, userConfig, templateFilePath) {
        let templateData = this.getTemplateData(templateFilePath);
        let fileContent;


        fileContent = templateData;
        fileContent = fileContent.split(templateKeys.author).join(userConfig.author);
        fileContent = fileContent.split(templateKeys.file).join(fileName + extension);
        fileContent = fileContent.split(templateKeys.className).join(fileName);
        fileContent = fileContent.split(templateKeys.componentName).join(componentName);
        fileContent = fileContent.split(templateKeys.dateAndTime).join(new Date().toString());

        return fileContent;
    }

    cookFileName(fileNameTemplate, userConfig, componentName) {
        let templateData = fileNameTemplate;
        let newFileName;


        newFileName = templateData;
        newFileName = newFileName.split(templateKeys.author).join(userConfig.author);
        newFileName = newFileName.split(templateKeys.componentName).join(componentName);
        newFileName = newFileName.split(templateKeys.dateAndTime).join(new Date().toString());

        return newFileName;
    }

    getTemplateData(templateFile) {
        return fs.readFileSync(templateFile, 'utf8');
    }

    createDir(dirName, shouldPrintErr = true) {
        let rs = false;
        if (!fs.existsSync(dirName)) {
            fs.mkdirSync(dirName);
            rs = true;
        } else {
            rs = false;
            if (shouldPrintErr) {
                console.log('Err: creating directory: ' + dirName);
            }
        }
        return rs;
    }
}

Component.description = `Creates a new class based state-full react-native
component`;

Component.flags = {
    // defining -n flag for specifying component name.
    name: flags.string({
        char: 'n',
        description: "name of component",
    })
}

module.exports = Component;