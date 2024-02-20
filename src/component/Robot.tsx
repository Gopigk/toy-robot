import React from "react";
import { ArrowUpIcon } from "@primer/octicons-react";
import { usePrevious } from "@react-yuki/hooks";
import { Coordinate } from "types";
import { createRobotTransition, getSquareSize } from "utils/utils";
import clsx from "clsx";
import { Spring, animated } from "@react-spring/web";
import styled, { css } from "styled-components";

const heightByWidth = (percentage = 100) => css`
  &:before {
    display: block;
    padding-top: ${percentage}%;
    content: "";
  }
`;

const RobotContainer = styled(animated.div)`
  position: absolute;
  display: flex;
  width: ${getSquareSize()};
  align-items: center;
  justify-content: center;

  ${heightByWidth()}
`;

export default function Robot({ coordinate, isPlaced, rotateDeg }: any) {
  const prevCoordinate = usePrevious<Coordinate>(coordinate);

  const prevIsPlaced = usePrevious<boolean>(isPlaced);

  const prevRotateDeg = usePrevious<number>(rotateDeg);

  console.log("coordinate", coordinate);
  if (!isPlaced) return null;

  const { currentTransition, prevTransition } = createRobotTransition({
    prevIsPlaced,
    coordinate,
    prevCoordinate,
    rotateDeg,
    prevRotateDeg,
  });

  console.log(prevTransition, currentTransition);
  return (
    <Spring from={{ ...prevTransition }} to={{ ...currentTransition }}>
      {(props: any) => (
        <RobotContainer style={props}>
          <ArrowUpIcon className={clsx("w-20 h-20 absolute")} />
        </RobotContainer>
      )}
    </Spring>
  );
}
