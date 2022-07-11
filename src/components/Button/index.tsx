import React from "react";
import { Container } from "./styles";

interface Props {
  text: string;
}

export const Button = ({ text, ...props }: Props) => {
  return <Container>{text}</Container>;
};
