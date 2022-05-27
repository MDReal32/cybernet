import { BuilderOptions } from "../types/builderOptions";
import { useCallback, useState } from "react";
import { Form } from "./Form";
import { FormItem } from "../types/formItem";

const builderFormElements: FormItem[] = [
  { id: "label", label: "Label", type: "input", placeholder: "" },
  { id: "placeholder", label: "Placeholder", type: "input", placeholder: "" },
  {
    id: "type",
    label: "Type",
    type: "select",
    placeholder: "",
    selectItems: ["input", "textarea", "datepicker", "email"]
  }
];

export const Builder = ({ addField }: BuilderOptions) => {
  return (
    <Form
      fields={builderFormElements}
      isRemoveLast={false}
      onAction={(event, data) => {
        event.preventDefault();

        addField?.(data as FormItem);
      }}
    />
  );
};
