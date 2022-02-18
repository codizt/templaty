const { execSync } = require( 'child_process' );

const prompt = require( 'prompt-sync' )();

const use = () => {
  console.log( "Use template:" );
  let name = prompt( "Enter the name of the template: " );
  let list = execSync( "cd ./templates && ls", { encoding: "utf8" } );
  if ( list.includes( name ) ) {
    execSync( `rm -rf . ; cp -r /usr/lib/node_modules/npm/node_modules/templaty/templates/${ name }/* . ;` );
    console.log( "Template used successfully!" );
  }
  else {
    console.log("Invalid template name");
  }
};

module.exports = use;