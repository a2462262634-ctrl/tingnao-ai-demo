import React from "react";
import { Form } from "@icon-park/react";
import { IconProps } from "./types";

export const FormIcon: React.FC<IconProps> = ({ className }) => (
  <Form className={className} theme="outline" size="100%" fill="currentColor" strokeWidth={4} />
);
