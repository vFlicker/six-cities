import { readFile } from 'fs/promises';
import { resolve } from 'path';

import { Command } from './command.interface.js';

type PackageJSONConfig = {
  version: string;
};

function isPackageJSONConfig(config: unknown): config is PackageJSONConfig {
  return (
    config !== null &&
    typeof config === 'object' &&
    !Array.isArray(config) &&
    Object.hasOwn(config, 'version')
  );
}

export class VersionCommand implements Command {
  constructor(private readonly filePath: string = './package.json') {}

  public getName(): string {
    return '--version';
  }

  public async execute(): Promise<void> {
    try {
      const version = await this.readVersion();
      console.info(version);
    } catch (error: unknown) {
      console.error(`Failed to read version from ${this.filePath}`, error);
    }
  }

  private async readVersion(): Promise<string> {
    const jsonContent = await readFile(resolve(this.filePath), 'utf-8');
    const importedContent: unknown = JSON.parse(jsonContent);

    if (!isPackageJSONConfig(importedContent)) {
      throw new Error('Filed to parse json content.');
    }

    return importedContent.version;
  }
}
