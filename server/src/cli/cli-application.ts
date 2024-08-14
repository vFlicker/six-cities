import { CommandParser } from './command-parser.js';
import { Command } from './commands/command.interface.js';

type CommandCollection = Map<string, Command>;

export class CLIApplication {
  private commands: CommandCollection = new Map();

  constructor(private readonly defaultCommandName = '--help') {}

  public registerCommands(commands: Command[]): void {
    for (const command of commands) {
      if (this.commands.has(command.getName())) {
        throw new Error(`Command ${command.getName()} already exists.`);
      }

      this.commands.set(command.getName(), command);
    }
  }

  public processCommand(argv: string[]): void {
    const parsedCommand = CommandParser.parse(argv);
    const [commandName] = Object.keys(parsedCommand);
    const command = this.getCommand(commandName);
    const commandArguments = parsedCommand[commandName] ?? [];
    command.execute(...commandArguments);
  }

  private getCommand(commandName: string): Command {
    return this.commands.get(commandName) ?? this.getDefaultCommand();
  }

  private getDefaultCommand(): Command | never {
    const defaultCommand = this.commands.get(this.defaultCommandName);

    if (!defaultCommand) {
      throw new Error(
        `The default command (${this.defaultCommandName}) is not registered.`,
      );
    }

    return defaultCommand;
  }
}
