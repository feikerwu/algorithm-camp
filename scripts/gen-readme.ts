import * as fs from 'fs';

async function dirFileToReadme(path: string) {
  const dir = await fs.promises.opendir(path);
  let res = [];
  for await (const dirent of dir) {
    const name = dirent.name.split('.');
    name.pop();
    const nameWithoutFileType = name.join('.');

    const entry = getMarkdownLinkEntry(
      nameWithoutFileType,
      `${path}/${dirent.name}`
    );
    res.push(entry);
  }
  res = res.sort((a, b) => parseInt(a.substring(1)) - parseInt(b.substring(1)));
  res.unshift(`## ${path.substring(2)}\n`);

  return res.join('');
}

async function getReadme() {
  let readmeTpl = await fs.promises.readFile('./scripts/README.template.md', {
    encoding: 'utf-8',
  });
  const leetcode = await dirFileToReadme('./leetcode-cn');
  const note = await dirFileToReadme('./note');

  readmeTpl = [readmeTpl, leetcode, note].join('\n\n');
  await fs.promises.writeFile('./README.md', readmeTpl);
  process.exit(0);
}

// leetcodeCn('./leetcode-cn').catch((e) => console.error(e));

function getMarkdownLinkEntry(name: string, link: string) {
  return `- [${name}](${link})\n`;
}

getReadme();
