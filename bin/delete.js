import chalk from 'chalk';
import { execSync } from 'child_process';
import readlineSync from 'readline-sync';

const deletes = () => {
  let name = readlineSync.question( chalk.cyan( "Enter the name of the template: " ) );
  let path = '/usr/lib/node_modules/templaty/templates/' + name;
  execSync( `rm -rf ${ path }`, { encoding: 'utf8' } );
  console.log( chalk.green( "Template deleted successfully!\n" ) );
};

export default deletes;