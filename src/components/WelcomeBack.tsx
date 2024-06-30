import React, { FunctionComponent, ReactNode, memo } from "react";

interface Props {
  children: ReactNode;
}

const WelcomeBack: FunctionComponent<Props> = (props) => {
  return <h2>Welcome back, {props.children}!</h2>;
};

export default memo(WelcomeBack);
