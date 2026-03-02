import React from "react";
import { DataArrival } from "@icon-park/react";
import { IconProps } from "./types";

export const DataArrivalIcon2: React.FC<IconProps> = ({ className }) => (
  <DataArrival className={className} theme="outline" size="100%" fill="currentColor" strokeWidth={4} />
);
