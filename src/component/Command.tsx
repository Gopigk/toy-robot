import React from "react";
import CommandInput from "./CommandInput";
import CommandList from "./CommandList";
import { CommandProps } from "types/command";

const Command = ({
  commands,
  handleCommand,
  reset,
  clearErrorMessage,
}: CommandProps) => (
  <div className="flex flex-col gap-4">
    <CommandInput
      handleCommand={handleCommand}
      clearErrorMessage={clearErrorMessage}
      reset={reset}
    />
    <CommandList commands={commands} />
  </div>
);

Command.displayName = "Command";

export default Command;
