import { action } from "typesafe-actions";
import { ActionTypes, AsyncActionCreator } from "./actions";
import { getErrorMessage } from "utils/utils";
import toast from "react-hot-toast";

export const addCommand = (command: string) =>
  action(ActionTypes.ADD_COMMAND, { command });

export const reset = () => action(ActionTypes.RESET);

export const showInputError = (message: string) =>
  action(ActionTypes.INPUT_ERROR, { message });

export const showPlaceError = (message: string) =>
  action(ActionTypes.PLACE_ERROR, { message });

export const clearErrorMessage = () => action(ActionTypes.CLEAR_ERROR_MESSAGE);

export const handleCommand: AsyncActionCreator<void> =
  (command: string) => (dispatch, getState) => {
    const {
      robot: { facing, coordinate, isPlaced },
    } = getState();

    const { inputError, placeError } = getErrorMessage({
      inputedCommand: command,
      isPlaced,
      facing,
      coordinate,
    });

    if (inputError.length) {
      return toast.error(inputError);
    }

    if (placeError.length) {
      return toast.error(placeError);
    }

    dispatch(addCommand(command));
  };
