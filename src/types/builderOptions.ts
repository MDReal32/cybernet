import { FormItem } from "./formItem";
import { Dispatch, SetStateAction } from "react";

export interface BuilderOptions {
  addField?(field: FormItem): void;
}
