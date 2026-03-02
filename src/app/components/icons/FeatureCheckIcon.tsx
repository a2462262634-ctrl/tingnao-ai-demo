import React from "react";
import { CheckOne } from "@icon-park/react";
import { IconProps } from "./types";

export const FeatureCheckIcon: React.FC<IconProps> = ({ className }) => (
  <CheckOne className={className} theme="outline" size="100%" fill="currentColor" strokeWidth={3} />
);
