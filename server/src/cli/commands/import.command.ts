import { getErrorMessage } from '#src/shared/helpers/common.js';
import { TSVFileReader } from '#src/shared/libs/file-reader/tsv-file-reader.js';

import { OfferFactory } from '../offer-factory.js';
import { Command } from './command.interface.js';

export class ImportCommand implements Command {
  public getName(): string {
    return '--import';
  }

  public async execute(...parameters: string[]): Promise<void> {
    const [filename] = parameters;
    const fileReader = new TSVFileReader(filename);

    fileReader.on('line', this.onImportedLine);
    fileReader.on('end', this.onCompletedImport);

    try {
      await fileReader.read();
    } catch (err) {
      console.error(`Can't import data from file: ${filename}`);
      console.error(getErrorMessage(err));
    }
  }

  private onImportedLine(line: string): void {
    const offerData = TSVFileReader.toArray(line);
    const offer = OfferFactory.create(offerData);
    console.info(offer);
  }

  private onCompletedImport(importedRowCount: number): void {
    console.info(`Imported ${importedRowCount} offers`);
  }
}
