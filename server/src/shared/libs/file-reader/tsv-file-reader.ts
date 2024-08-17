import { readFileSync } from 'node:fs';

import { FileReader } from './file-reader.interface.js';

type TSVRow = string[];

export class TSVFileReader implements FileReader {
  private rawData = '';

  public read(filename: string): TSVFileReader {
    try {
      this.rawData = readFileSync(filename, { encoding: 'utf-8' });
    } catch {
      console.error(`Can't import data from file: ${filename}`);
    }

    return this;
  }

  public toArray(): TSVRow[] {
    if (!this.rawData) {
      throw new Error('File was not read.');
    }

    return this.rawData
      .split('\n')
      .filter((row) => row.length > 0)
      .map((line) => line.split('\t'));
  }
}
