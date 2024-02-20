import React, { memo } from "react";
import { CommandListProps } from "types/command";

const CommandsList = memo<CommandListProps>(
  ({ commands }) => {
    if (commands.length === 0) {
      return null;
    }

    return (
      <div className="flex flex-col w-full h-full rounded-lg p-2 items-start gap-2 bg-gray-400">
        <h2 className="text-lg font-semibold">Command List</h2>
        <ul className="flex flex-col gap-2 items-start">
          {commands.map((item, index) => (
            <li key={index}>{`${index + 1} . ${item}`}</li>
          ))}
        </ul>
      </div>
    );
  },
  (prevProps, nextProps) => {
    if (prevProps.commands.length === nextProps.commands.length) {
      return true;
    }
    return false;
  }
);

export default CommandsList;
