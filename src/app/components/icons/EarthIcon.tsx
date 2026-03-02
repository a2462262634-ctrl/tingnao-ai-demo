import React from "react";
import { Earth } from "@icon-park/react";
import { IconProps } from "./types";

export const EarthIcon: React.FC<IconProps> = ({ className }) => (
  <Earth className={className} theme="outline" size="100%" fill="currentColor" strokeWidth={4} />
);
