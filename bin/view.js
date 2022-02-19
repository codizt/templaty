import chalk from 'chalk';
import { execSync } from 'child_process';

function removeItem(array, item) {
  return array.filter(i => i !== item);
}

const view = () => {
  let out = execSync( 'mkdir -p /usr/lib/node_modules/templaty/templates/ &&cd /usr/lib/node_modules/templaty/templates/ && ls', { encoding: 'utf8' } ).toString().split( "\n" );
  out.forEach( ( item ) => { item.trim(); } );
  out = removeItem( out, "" );
  for ( let i = 0; i < out.length; i++ ) { 
    console.log( chalk.green( " " + (i+1) + ". " + out[i] ) );
  }
  console.log( "\n" );
};

export default view;