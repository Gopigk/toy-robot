import Robot from "component/Robot";
import { connect } from "react-redux";
import { createSelector } from "reselect";
import {
  selectIsPlaced,
  selectCoordinate,
  selectFacing,
  selectRotateDeg,
  selectErrorMessage,
} from "selector/robot";

export default connect(
  createSelector(
    selectIsPlaced(),
    selectCoordinate(),
    selectFacing(),
    selectRotateDeg(),
    selectErrorMessage(),
    (isPlaced, coordinate, facing, rotateDeg, errorMessage) => ({
      isPlaced,
      coordinate,
      facing,
      rotateDeg,
      errorMessage,
    })
  )
)(Robot);
