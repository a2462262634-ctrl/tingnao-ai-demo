import React from "react";
import { MessageSuccess } from "@icon-park/react";
import { IconProps } from "./types";

export const MessageSuccessIcon: React.FC<IconProps> = ({ className }) => (
  <MessageSuccess className={className} theme="outline" size="100%" fill="currentColor" strokeWidth={4} />
);
