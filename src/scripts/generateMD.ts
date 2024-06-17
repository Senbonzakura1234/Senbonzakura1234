import { writeFile } from 'fs/promises';
import { mdxToMd } from 'mdx-to-md';
import path from 'path';

const generateMD = async () => {
	const readme = await mdxToMd(path.resolve('./README.mdx'));

	await writeFile('README.md', readme);

	console.log('📝 Converted README.mdx -> README.md');
};

void generateMD().then();
