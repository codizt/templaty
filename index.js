const prompt = require( 'prompt-sync' )();
const create = require( './create' );
const use = require( './use' );
const viewall = require( './viewall' );
const deletes = require( './deletes' );

console.log( "\n ~~~ TEMPLATY ~~~ \n" );

let input = 0;
console.log( "1. Create a new template \n2. Use a template \n3. Delete a template \n4. View all templates \n5. Exit " );
input = prompt( "Enter the corresponding number to the action you want to perform: " );
console.log( "" );
while ( input !== 5 ) {
  if ( input === "1" ) {
    create();
    console.log( "Exiting..." );
    break;
  }
  else if ( input === "2" ) {
    use();
    console.log( "Exiting..." );
    break;
  }
  else if ( input === "3" ) {
    deletes();
    console.log( "Exiting..." );
    break;
  }
  else if ( input === "4" ) {
    viewall();
    console.log( "Exiting..." );
    break;
  }
  else if ( input === "5" ) {
    console.log( "Exiting..." );
    break;
  }
  else {
    console.log( "\nInvlaid entry. Please try again.\n" );
    console.log( "1. Create a new template \n2. Use a template \n3. Delete a template \n4. View all templates \n5. Exit " );
    input = prompt( "Enter the corresponding number to the action you want to perform: " );
  }
}