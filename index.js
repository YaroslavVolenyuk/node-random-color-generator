import chalk from 'chalk';
import { ColorTranslator, Harmony, Mix } from 'colortranslator';
import generateRandomColor from 'generate-random-color';
import randomColor from 'randomcolor';

const randColor = randomColor({
  luminosity: `${process.argv[3]}`,
  hue: `${process.argv[2]}`,
});
console.log(process.argv);
// console.log(randColor, `${process.argv[2]}`, `${process.argv[3]}`);
// console.log(chalk.hex(`${randColor}`)(`${randColor} one more random color`));

const randomHexColor = generateRandomColor.hex();
//
// const color = new ColorTranslator(`${randomHexColor}`);
// const hslColor = color.HSL;
// console.log(hslColor);

// console.log(process.argv[2]);
// const hex = new ColorTranslator(`${generateRandomColor}`);
// console.log(hex);

// console.log(chalk.hex(`${randomHexColor}`)(`${randomHexColor}`));

//
//
if (process.argv[2] in chalk) {
  console.log(
    chalk.hex(`${randColor}`)(`

  # ###############################
  # ###############################
  # ###############################
  # #####                     #####
  # #####        ${randColor}      #####
  # #####                     #####
  # ###############################
  # ###############################
  # ###############################

  `),
  );
} else {
  console.log(
    chalk.hex(`${randomHexColor}`)(`
  # ###############################
  # ###############################
  # ###############################
  # #####                     #####
  # #####       ${randomHexColor}       #####
  # #####                     #####
  # ###############################
  # ###############################
  # ###############################`),
  );
}
