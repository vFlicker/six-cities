import { Command } from './command.interface.js';

export class HelpCommand implements Command {
  public getName(): string {
    return '--help';
  }

  public async execute(): Promise<void> {
    console.info(`
      The program for preparing data for REST API server.

      Example:
        cli.js --<command> [--arguments]
      Commands:
        --version:                     outputs the version number
        --help:                        prints this text
        --import <path>:               imports data from a file
        --generate <n> <path> <url>:   generates data
    `);
  }
}
