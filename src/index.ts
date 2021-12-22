// TODO write fetch api client code
// TODO write neat wrapper for fetch
// TODO investigate usage of cross-fetch
// TODO read swagger spec
// TODO Generate simple entities
// TODO Generate disriminated entities
import fs from 'fs/promises';

(async function () {
  const input = await fs.readFile('./swagger.json');
  const parsed = JSON.parse(input.toString());
  console.log(parsed);
})();
