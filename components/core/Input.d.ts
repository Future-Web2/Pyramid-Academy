import * as React from "react";

/**
 * Input — labelled text/phone/email field with optional hint + error state.
 */
export interface InputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "size"> {
  label?: string;
  hint?: string;
  error?: string;
  required?: boolean;
  iconLeft?: React.ReactNode;
}

export function Input(props: InputProps): JSX.Element;
