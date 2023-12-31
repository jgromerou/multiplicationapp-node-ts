import fs from 'fs';
import { yarg as argv } from './config/plugins/yargs.plugin';

const { b, l, s: showTable } = argv;

let outputMessage = '';
//const base = 5;

const headerMessage = `
===============================
        Total del ${b}
===============================\n
`;

for (let i = 1; i <= l; i++) {
  outputMessage += `${b} x ${i} = ${b * i}\n`;
}

outputMessage = headerMessage + outputMessage;

if (showTable) {
  console.log(outputMessage);
}

const outputPath = `outputs`;

//Crear la carpeta de outputs
fs.mkdirSync(outputPath, { recursive: true });

//grabar el archivo de la tabla de 5
fs.writeFileSync(`${outputPath}/tabla-${b}.txt`, outputMessage);
console.log('File created!');
