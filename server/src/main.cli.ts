#!/usr/bin/env node
import { ImportCommand } from './cli/commands/import.command.js';
import { CLIApplication, HelpCommand, VersionCommand } from './cli/index.js';

function bootstrap(): void {
  const cliApplication = new CLIApplication();
  cliApplication.registerCommands([
    new HelpCommand(),
    new VersionCommand(),
    new ImportCommand(),
  ]);
  cliApplication.processCommand(process.argv);
}

bootstrap();
