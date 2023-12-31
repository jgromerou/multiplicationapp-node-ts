//console.log(process.argv);

import { yarg as argv } from './config/plugins/yargs.plugin';
import { ServerApp } from './presentation/server-app';

// const [tsnode, app, ...args] = process.argv;
// console.log(args);

//console.log(argv.b);

(async () => {
  await main();
  //   console.log('Fin del Programa');
})();

async function main() {
  //console.log('Main ejecutado.');
  const {
    b: base,
    l: limit,
    s: showTable,
    n: fileName,
    d: fileDestination,
  } = argv;
  ServerApp.run({ base, limit, showTable, fileName, fileDestination });
}
