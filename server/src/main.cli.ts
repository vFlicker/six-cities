#!/usr/bin/env node
import { ImportCommand } from './cli/commands/import.command.js';
import {
  CLIApplication,
  GenerateCommand,
  HelpCommand,
  VersionCommand,
} from './cli/index.js';

function bootstrap(): void {
  const cliApplication = new CLIApplication();
  cliApplication.registerCommands([
    new HelpCommand(),
    new VersionCommand(),
    new ImportCommand(),
    new GenerateCommand(),
  ]);
  cliApplication.processCommand(process.argv);
}

bootstrap();
