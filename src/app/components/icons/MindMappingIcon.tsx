import React from "react";
import { MindMapping } from "@icon-park/react";
import { IconProps } from "./types";

export const MindMappingIcon: React.FC<IconProps> = ({ className }) => (
  <MindMapping className={className} theme="outline" size="100%" fill="currentColor" strokeWidth={4} />
);
