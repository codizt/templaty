#!/usr/bin/env node

import { createInterface } from 'readline';
import chalk from 'chalk';
import centertext from "center-text";
import figlet from "figlet";
import { execSync } from 'child_process';
import boxen from 'boxen';
import readlineSync from "readline-sync";

console.log( boxen(chalk.greenBright( figlet.textSync( 'Welcome to Templaty!' ) ) , { padding: 1, borderColor: 'green' } ) );

console.log(
  chalk.cyanBright(
    "Quickly create, save and use custom templates for your projects.\n"
  )
);

console.log( chalk.blue( "\t\tMENU\n" ) );
console.log( chalk.green( "\t1. Create a new template" ) );
console.log( chalk.green( "\t2. Use a template" ) );
console.log( chalk.green( "\t3. View all templates" ) );
console.log( chalk.green( "\t4. Delete a template" ) );
console.log( chalk.green( "\t5. Exit\n" ) );

import create from "./create.js";
import use from "./use.js";
import view from "./view.js";
import deletes from "./delete.js";

while ( true ) {
  let choice = readlineSync.question( chalk.cyan( "Enter your choice: " ) );
  console.log( "" );
  if ( choice == 1 ) {
    console.log( chalk.blue( "\tCREATE A NEW TEMPLATE\n" ) );
    create();
    break;
  }
  else if ( choice == 2 ) {
    console.log( chalk.blue( "\tUSE A TEMPLATE\n" ) );
    use();
    break;
  }
  else if ( choice == 3 ) {
    console.log( chalk.blue( "\tVIEW ALL TEMPLATES\n" ) );
    view();
    break;
  }
  else if ( choice == 4 ) {
    console.log( chalk.blue( "\tDELETE A TEMPLATE\n" ) );
    deletes();
    break;
  }
  else if ( choice == 5 ) { 
    console.log( chalk.blue( "\tEXITING...\n" ) );
    break;
  }
  else {
    console.log( chalk.red( "\tINVALID CHOICE\n" ) );
  }
}