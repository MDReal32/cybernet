import { FormItemType } from "./formItemType";

export interface FormItem {
  label: string;
  placeholder: string;
  type: FormItemType;
  selectItems?: string[];
  id: string;
}
