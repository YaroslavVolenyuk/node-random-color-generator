import chalk from 'chalk';
import generateRandomColor from 'generate-random-color';
import randomColor from 'randomcolor';

// import { ColorTranslator, Harmony, Mix } from 'colortranslator';

const userGivenNumber = randomColor({
  luminosity: process.argv[3],
  hue: process.argv[2],
});

const randomHexColor = generateRandomColor.hex(); // random color if no color given
/*

console.log(randColor, `${process.argv[2]}`, `${process.argv[3]}`);
console.log(chalk.hex(`${randColor}`)(`${randColor} one more random color`));

const color = new ColorTranslator(`${randomHexColor}`);
const hslColor = color.HSL;
console.log(hslColor);

console.log(process.argv[2]);
const hex = new ColorTranslator(`${generateRandomColor}`);
console.log(hex);

console.log(chalk.hex(`${randomHexColor}`)(`${randomHexColor}`));

*/

if (process.argv[2]) {
  console.log(
    chalk.hex(userGivenNumber)(`

###############################
###############################
###############################
#####                     #####
#####       ${userGivenNumber}       #####
#####                     #####
###############################
###############################
###############################

  `),
  );
} else {
  console.log(
    chalk.hex(randomHexColor)(`
###############################
###############################
###############################
#####                     #####
#####       ${randomHexColor}       #####
#####                     #####
###############################
###############################
###############################`),
  );
}
