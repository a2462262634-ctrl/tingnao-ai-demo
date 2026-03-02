import React from "react";
import { Download } from "@icon-park/react";
import { IconProps } from "./types";

export const DownloadIcon: React.FC<IconProps> = ({ className }) => (
  <Download className={className} theme="outline" size="24" fill="#808080" strokeWidth={4} />
);
