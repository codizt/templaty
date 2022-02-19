import chalk from 'chalk';
import { execSync } from 'child_process';
import readlineSync from 'readline-sync';

function removeItem(array, item) {
  return array.filter(i => i !== item);
}

const use = () => {
  console.log( chalk.red( "Warning: Existing files in this directory will be overwritten!\n" ) );
  let name = readlineSync.question( chalk.cyan( "Enter the name of the template: " ) );
  let list = execSync( 'cd /usr/lib/node_modules/templaty/templates/ && ls', { encoding: 'utf8' } ).toString().split( "\n" );
  list.forEach( ( item ) => { item.trim(); } );
  list = removeItem( out, "" );
  if ( list.includes( name ) ) { 
    execSync( `cp -r /usr/lib/node_modules/templaty/templates/${ name }/* .`, { encoding: 'utf8' } );
    console.log( chalk.green( "Template used successfully!\n" ) );
  }
  else {
    console.log( chalk.red( "Invalid template name!\n" ) );
  }
};

export default use;