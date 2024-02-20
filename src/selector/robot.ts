import { createSelector } from "reselect";
import { ApplicationState } from "types/reducer";

export const selectRobotState = () => (state: ApplicationState) => state.robot;

export const selectCoordinate = () =>
  createSelector(selectRobotState(), (robotState) => robotState.coordinate);

export const selectFacing = () =>
  createSelector(selectRobotState(), (robotState) => robotState.facing);

export const selectRotateDeg = () =>
  createSelector(selectRobotState(), (robotState) => robotState.rotateDeg);

export const selectCommmands = () =>
  createSelector(selectRobotState(), (robotState) => robotState.commands);

export const selectErrorMessage = () =>
  createSelector(selectRobotState(), (robotState) => robotState.errorMessage);

export const selectIsPlaced = () =>
  createSelector(selectRobotState(), (robotState) => robotState.isPlaced);
