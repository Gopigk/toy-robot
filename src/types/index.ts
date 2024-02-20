import { ThunkMiddleware, ThunkAction } from "@reduxjs/toolkit";
import { ApplicationState } from "./reducer";
import { Actions } from "./actions";

export type Direction = "NORTH" | "SOUTH" | "WEST" | "EAST";

export type Orientation = Record<Direction | string, CoordinateObject>;

export interface CoordinateObject {
  x: number;
  y: number;
}

export type Coordinate = CoordinateObject | null;

export type RotateDeg = Record<Direction | string, number>;

export interface TableDimension extends CoordinateObject {}

export interface Facing extends CoordinateObject {}

export interface Thunk extends ThunkMiddleware<ApplicationState, Actions> {}

export interface ThunkDispatch<S, E, A extends Actions> {
  <R>(asyncAction: ThunkAction<R, S, E, A>): R;
  <T extends A>(action: T): T;
}

export type Dispatch = ThunkDispatch<ApplicationState, {}, Actions>;

export interface Facing extends CoordinateObject {}
