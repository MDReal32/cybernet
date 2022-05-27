import { FormItem } from "./formItem";
import { FormEvent } from "react";

export interface FormOptions {
  fields: FormItem[];
  onAction?(event: FormEvent<HTMLFormElement>, data: Record<string, any>): void;
  isRemoveLast?: boolean;
  removeLastField?(): void;
}
