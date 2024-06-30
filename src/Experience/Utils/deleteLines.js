const fs = require('fs');
const readline = require('readline');
const inputFilePath = '/Users/gurjitsamra/Documents/Projects/Pokedex/static/textures/grass/grassObject.obj'
const outputFilePath = '/Users/gurjitsamra/Documents/Projects/Pokedex/static/textures/grass/updatedGrassObject.obj';
const numberToDelete = 210017;

// Function to delete lines containing a specific keyword
function deleteLines(inputFilePath, outputFilePath, numberToDelete)
{
    const inputStream = fs.createReadStream(inputFilePath);
    const outputStream = fs.createWriteStream(outputFilePath);
    const rl = readline.createInterface({
        input: inputStream,
        output: outputStream,
        terminal: false
    });

    let counter = 0;

    rl.on('line', (line) => {
        if (counter < numberToDelete) {
            counter++;
        } else {
            outputStream.write(`${line}\n`);
        }
    });

    rl.on('close', () => {
        outputStream.end();
        console.log(`Lines from 0 - ${numberToDelete} have been deleted.`);
    });
}

deleteLines(inputFilePath, outputFilePath, numberToDelete);
