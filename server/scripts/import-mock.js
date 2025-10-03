import { spawn } from 'child_process';
import dotenv from 'dotenv';

dotenv.config();

const args = [
  './dist/main.cli.js',
  '--import',
  './mocks/mock-data.tsv',
  process.env.DB_USERNAME,
  process.env.DB_PASSWORD,
  process.env.DB_HOST,
  process.env.DB_PORT,
  process.env.DB_NAME,
  process.env.SALT,
];

const child = spawn('node', args, { stdio: 'inherit' });

child.on('exit', (code) => {
  process.exit(code);
});
