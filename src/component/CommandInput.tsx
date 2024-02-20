import React, { ChangeEvent, memo, useCallback, useState } from "react";
import { CommandInputProps } from "types/command";

const CommandInput = memo<CommandInputProps>(
  ({ handleCommand, reset, clearErrorMessage }) => {
    const [command, updateCommand] = useState("");

    const onChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
      e.preventDefault();

      updateCommand(e.target.value.toUpperCase());
    }, []);

    const handleSubmit = (e: React.SyntheticEvent) => {
      e.preventDefault();

      if (command.length === 0) return;

      clearErrorMessage();

      handleCommand(command);

      updateCommand("");
    };

    return (
      <div className="flex flex-col gap-4">
        <form onSubmit={handleSubmit} className="flex flex-col space-y-2">
          <input
            className="border-2 border-gray-500 w-96 rounded-md p-2"
            type="text"
            value={command}
            onChange={onChange}
            placeholder="Enter command to move robot"
          />
          <div className="items-center grid grid-cols-2">
            <button className="bg-blue-500 text-white rounded-md p-2 ml-2">
              Run
            </button>
            <button
              className="bg-red-500 text-white rounded-md p-2 ml-2"
              onClick={reset}
            >
              Reset
            </button>
          </div>
        </form>
      </div>
    );
  }
);

export default CommandInput;
