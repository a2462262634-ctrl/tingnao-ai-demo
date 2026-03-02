import React from "react";
import { PeopleSpeak } from "@icon-park/react";
import { IconProps } from "./types";

export const PeopleSpeakIcon: React.FC<IconProps> = ({ className }) => (
  <PeopleSpeak className={className} theme="outline" size="100%" fill="currentColor" strokeWidth={4} />
);
