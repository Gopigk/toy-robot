import Command from "component/Command";
import { connect } from "react-redux";
import { createSelector } from "reselect";
import { selectCommmands } from "selector/robot";
import { handleCommand, clearErrorMessage, reset } from "types/robotActions";

export default connect(
  createSelector(selectCommmands(), (commands) => ({
    commands,
  })),
  { handleCommand, clearErrorMessage, reset }
)(Command);
