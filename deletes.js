const prompt = require( 'prompt-sync' )();
const execSync = require("child_process").execSync;

const deletes = () => {
  console.log( "Delete template" );
  let name = prompt( "Enter the name of the template: " );
  execSync( `rm -rf /usr/lib/node_modules/npm/node_modules/templaty/templates/${ name }` );
  console.log("Template deleted successfully!");
};

module.exports = deletes;