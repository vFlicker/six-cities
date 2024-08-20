import got from 'got';

import { getErrorMessage } from '#src/shared/helpers/index.js';
import { TSVFileWriter } from '#src/shared/libs/file-writer/index.js';
import { TSVOfferGenerator } from '#src/shared/libs/offer-generator/index.js';
import { MockServerData } from '#src/shared/types/mock-server-data-type.js';

import { Command } from './command.interface.js';

export class GenerateCommand implements Command {
  private initialDate: MockServerData | null = null;

  public getName(): string {
    return '--generate';
  }

  public async execute(...parameters: string[]): Promise<void> {
    const [count, filepath, url] = parameters;
    const offerCount = Number.parseInt(count, 10);

    try {
      await this.load(url);
      await this.write(filepath, offerCount);
      console.info(`Generated ${offerCount} offers`);
    } catch (err: unknown) {
      console.error("Can't generate offers");
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

  private async write(filepath: string, offersCount: number): Promise<void> {
    const tsvFileWriter = new TSVFileWriter(filepath);

    for (let i = 0; i < offersCount; i++) {
      const offer = TSVOfferGenerator.generate(this.initialDate!);
      await tsvFileWriter.write(offer);
    }
  }
}
