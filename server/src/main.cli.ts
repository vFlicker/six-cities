import { CLIApplication, HelpCommand, VersionCommand } from './cli/index.js';

function bootstrap(): void {
  const cliApplication = new CLIApplication();
  cliApplication.registerCommands([new HelpCommand(), new VersionCommand()]);
  cliApplication.processCommand(process.argv);
}

bootstrap();
