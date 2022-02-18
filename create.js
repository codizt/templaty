const prompt = require( 'prompt-sync' )();
const execSync = require("child_process").execSync;

const create = () => {
  console.log( "Create Template:" );

  let pwd = execSync( "pwd", { encoding: "utf8" } ).split( "\n" )[ 0 ];
  // console.log( pwd );
  let name = prompt( "Enter the name of the template: " );
  execSync( `mkdir -p /usr/lib/node_modules/npm/node_modules/templaty/templates ; cd /usr/lib/node_modules/npm/node_modules/templaty/templates ; mkdir -p ${ name } ; chmod -R o+rwx ${name}; cp -r ${ pwd }/. ${ name }/; cd ${name}; rm -rf node_modules; cd ${ pwd };` );
  // execSync( `mkdir -p ~/Projects/testing/templates ; cd ~/Projects/testing/templates ; mkdir -p ${ name } ; chmod -R o+rwx ${name}; cp -r ${ pwd }/. ${ name }/; cd ${name}; rm -rf node_modules; cd ${ pwd };` );
  console.log( "Template created successfully!" );
};

module.exports = create;