# Shop_with_Rob

#To use this repo:

1. Fork and clone repo to your local machine.
2. Open the project and open the terminal.
3. Run `npm install`.
4. Run `npm start` in the terminal. //for the server
5. Run `npm webpack` in a new terminal(keep the last one going!).
7. Run `npm run react-dev` in the terminal from step 5. //for bundling

/////////////////////////////////////////////////////

#Further learning:

##How to install npm on your own on VSCode:
1. Run `npm init` in terminal and enter in the walkthrough info as desired (optional). This creates your package.json file.
2. Run `npm install` in the terminal. This will create your package-lock.json file.

##How to install webpack on your own:
1. Run `npm install --save-dev webpack` to download webpack locally.
2. Run `npm install --save-dev webpack-cli` if you want to run webpack from the terminal (recommended).
3. Make a new file named `webpack.config.js`. This will be used to tell webpack where to look for its input and where to output the bundled file.
4. Add your configuration info into `webpack.config.js`. Make sure that your `entry` and `output` paths match your folder set up. You can name the files whatever you like, however it's standard to name the main(exports the folder content) file `index.js`. Note: If your output path file cannot be found(could be the wrong path), webpack will make the file for you!
  Example:
  `module.exports = {
    entry: './client/src/index.js',
    output: {
      filename: 'bundle.js',
      path: __dirname + '/client/public',
    },
  };`
5. Copy `"react-dev": "webpack --config webpack.config.js --mode=development -w"` into your package.json `"scripts"` object (you can switch out the command name `react-dev` to whatever you like). This will be your terminal command to run webpack. The `mode` can be set to `development`(makes your output file easier to read if you want to trace a bug) or `production`(the default if you don't specify, saves space).
  Example:
  `"scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "react-dev": "webpack --config webpack.config.js --mode=development -w"
  },`
6. Run `npm run react-dev`(or whatever you chose to name the command in 5.) in its own terminal. Webpack will automatically re-build the output/browser-using file for you whenever you make a change to your client-side `index.js`-touching code(thanks to the `-w`).


##This is a chanterelle mushroom:
****************************************************************************************************
*********************************************,,,,,,,,,,,,,,*****************************************
********************************,,,,,,,,,,,,,,*/******,,,**,,,..,..,,*******************************
*****************************///*,,,,,,,,,,,///(/*************,,,*,*,,,,****************************
******************************///*,,,,****/(((//*/#/#*#((((//(//********,***************************
********************************(((((((//((//(#((*((((((((*(****************************************
,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,////////*/((#(#(/((##/((*/,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,
,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,(((((/#///*,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,
,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,#(//((/*,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,
,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,///(((######/,/(////,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,
,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,///(((#####(///****(//*,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,
,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,/////////*****,****,,((//*.,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,
,,,,,,,,,,,,,,,,,,,,,,,,,,,,/((//////**********,,*/****************,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,
,,,,,,,,,,,,,,,,,,,,,,,,,,,**,,,,,,,*((/(((/,,,,,/(///******,,****/***.,,,,,,,,,,,,,,,,,,,,,,,,,,,,,
,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,##((,,,,,,,,,##((//**,********,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,
,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,(//,,,,,,,,*#(/*,/*/*/**,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,
,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,((/(,,,,,,,(#(/,,,,(/**,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,
,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,((//,,,,,*#(/*,,,,(/*,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,
*****************************,,,,,,,,,,,,,((/*,,,,#((/,,,,,(/*,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,
****//////////////////*/*****************,,((//,,##(/*,,,,//*,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,
***********/////////////////////////////****((/*/#%(//,,,,(*,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,
,,,,,,,,************************************///******,,,,,**,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,
