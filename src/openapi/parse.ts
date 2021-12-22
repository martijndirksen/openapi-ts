import fs from 'fs/promises';

export async function ParseSpecification(path: string) {
  const input = await fs.readFile(path, { encoding: 'utf8' });

  return input;
}
