import React from "react";

import { Slide, useScrollTrigger } from "@material-ui/core";

type HideOnScrollProps = { children: React.ReactElement };

const HideOnScroll = ({ children }: HideOnScrollProps): JSX.Element => {
  const trigger = useScrollTrigger();

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
};

export default HideOnScroll;
