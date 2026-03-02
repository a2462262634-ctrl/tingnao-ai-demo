import React from "react";
import { ScanCode } from "@icon-park/react";
import { IconProps } from "./types";

export const ScanIcon: React.FC<IconProps> = ({ className }) => (
  <ScanCode className={className} theme="outline" size="24" fill="#808080" strokeWidth={4} />
);
