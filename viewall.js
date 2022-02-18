const prompt = require( 'prompt-sync' )();
const execSync = require("child_process").execSync;

const viewall = () => {
  console.log( "List of saved templates:" );
  let out = execSync( "cd /usr/lib/node_modules/npm/node_modules/templaty/templates/; ls", { encoding: "utf8" } );
  console.log( out );
};

module.exports = viewall;