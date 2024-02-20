import { Orientation, RotateDeg, TableDimension } from "types";

export const TABLE_DIMENSION: TableDimension = {
  x: 5,
  y: 5,
};

export const ORIENTATION: Orientation = {
  NORTH: { x: 0, y: 1 },
  EAST: { x: 1, y: 0 },
  SOUTH: { x: 0, y: -1 },
  WEST: { x: -1, y: 0 },
};

export const INITIAL_ROTATE_DEG: RotateDeg = {
  NORTH: 0,
  EAST: 90,
  SOUTH: 180,
  WEST: 270,
};

export const FACING_DIRECTIONS = Object.keys(ORIENTATION);

export const COMMANDS = ["PLACE", "MOVE", "LEFT", "RIGHT", "REPORT"];

export const ERRORS = {
  invalidCommand: `Invalid command format. Available commands are ${COMMANDS.join(
    " | "
  )}.`,
  invalidInitialCommand: `Invalid PLACE command format. The valid PLACE command should be 'PLACE X,Y,F'.`,
  notInitialized: `The robot is not placed on the table yet. Place it first with 'PLACE X,Y,F'`,
  wrongPlace: `The robot was placed out of the table`,
  wrongDirection: `Invalid facing direction value. Available directions should be ${FACING_DIRECTIONS.join(
    " | "
  )}.`,
  wrongCoordinate: `Invalid coordinate value. It must be non-negative interger.`,
  wrongMovingDirection: `The robot can't move forward on that direction, it may fall off the table.`,
};
