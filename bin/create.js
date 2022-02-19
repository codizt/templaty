import chalk from 'chalk';
import { execSync } from 'child_process';
import readlineSync from 'readline-sync';

const create = () => {
  let name = readlineSync.question( chalk.cyan( "Enter the name of the template: " ) );
  let pwd = execSync( 'pwd', { encoding: 'utf8' } ).toString().trim();
  let path = '/usr/lib/node_modules/templaty/templates/' + name;
  execSync( `mkdir -p ${ path } && chmod -R o+rwx ${path} && cd ${ path } && cp -r ${ pwd }/. ${path}/ && rm -rf node_modules`, { encoding: 'utf8' } );
  console.log( chalk.green( "Template created successfully!\n" ) );
};

export default create;