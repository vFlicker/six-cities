import got from 'got';

import { getErrorMessage } from '#src/shared/helpers/index.js';
import { TSVDataGenerator } from '#src/shared/libs/data-generator/index.js';
import { TSVFileWriter } from '#src/shared/libs/file-writer/index.js';
import { MockServerData } from '#src/shared/types/mock-server-data-type.js';

import { Command } from './command.interface.js';

export class GenerateCommand implements Command {
  private initialDate: MockServerData | null = null;

  public getName(): string {
    return '--generate';
  }

  public async execute(...parameters: string[]): Promise<void> {
    const [count, filepath, url] = parameters;
    const parsedCount = Number.parseInt(count, 10);

    try {
      await this.load(url);
      await this.write(filepath, parsedCount);
      console.info(`Generated ${parsedCount} data rows`);
    } catch (err: unknown) {
      console.error("Can't generate data");
      console.error(getErrorMessage(err));
    }
  }

  private async load(url: string): Promise<void> {
    try {
      this.initialDate = await got.get(url).json();
    } catch (error) {
      console.error('Error loading data');
    }
  }

  private async write(filepath: string, count: number): Promise<void> {
    const tsvFileWriter = new TSVFileWriter(filepath);
    const tsvDataGenerator = new TSVDataGenerator(this.initialDate!);

    for (let i = 0; i < count; i++) {
      const tsvRow = tsvDataGenerator.generate();
      await tsvFileWriter.write(tsvRow);
    }
  }
}
