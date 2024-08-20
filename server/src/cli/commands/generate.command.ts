import { appendFile } from 'fs/promises';
import got from 'got';

import { TSVOfferGenerator } from '#src/shared/libs/offer-generator/tsv-offer-generator.js';
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
    const tsvOfferGenerator = new TSVOfferGenerator(this.initialDate!);
    for (let i = 0; i < offersCount; i++) {
      // It may seem that it is more convenient to first collect the generated
      // offers in an array and write them together, but this is not the case.
      // A certain amount of memory is allocated for the Node.js process.
      // If it is exceeded, an error will occur.
      const offer = tsvOfferGenerator.generate();
      await appendFile(filepath, `${offer}\n`, { encoding: 'utf-8' });
    }
  }
}
