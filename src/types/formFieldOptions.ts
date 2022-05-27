import { FormItem } from "./formItem";

export interface FormFieldOptions {
  field: FormItem;
  onChange?(value: string): void;
  error: boolean;
}
