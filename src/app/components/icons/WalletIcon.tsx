import React from "react";
import { Wallet } from "@icon-park/react";
import { IconProps } from "./types";

export const WalletIcon: React.FC<IconProps> = ({ className }) => (
  <Wallet className={className} theme="outline" size="100%" fill="currentColor" strokeWidth={4} />
);
