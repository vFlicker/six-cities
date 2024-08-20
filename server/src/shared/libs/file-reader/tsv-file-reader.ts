import EventEmitter from 'node:events';
import { createReadStream } from 'node:fs';

import { FileReader } from './file-reader.interface.js';

const CHUNK_SIZE_16KB = 16384;

export class TSVFileReader extends EventEmitter implements FileReader {
  constructor(private readonly filename: string) {
    super();
  }

  static toArray(line: string): string[] {
    return line.replace('\n', '').split('\t');
  }

  public async read(): Promise<void> {
    const readSteam = createReadStream(this.filename, {
      encoding: 'utf-8',
      highWaterMark: CHUNK_SIZE_16KB,
    });

    let remainingData = '';
    let nextLinePosition = -1;
    let importedRowCount = 0;

    for await (const chunk of readSteam) {
      remainingData += chunk.toString();

      while ((nextLinePosition = remainingData.indexOf('\n')) >= 0) {
        const completeRow = remainingData.slice(0, nextLinePosition);
        remainingData = remainingData.slice(nextLinePosition + 1);
        importedRowCount += 1;

        this.emit('line', completeRow);
      }
    }

    this.emit('end', importedRowCount);
  }
}
