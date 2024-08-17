import { TSVFileReader } from '#src/shared/libs/file-reader/tsv-file-reader.js';

import { OfferFactory } from '../offer-factory.js';
import { Command } from './command.interface.js';

export class ImportCommand implements Command {
  public getName(): string {
    return '--import';
  }

  public async execute(...parameters: string[]): Promise<void> {
    const [filename] = parameters;
    const fileReader = new TSVFileReader();
    const rawData = fileReader.read(filename).toArray();
    const offers = rawData.map((row) => OfferFactory.create(row));
    console.log(offers);
  }
}
