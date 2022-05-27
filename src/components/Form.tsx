import { FormOptions } from "../types/formOptions";
import { FormField } from "./FormField";
import { useState } from "react";

export const Form = ({ fields, onAction, isRemoveLast = true, removeLastField }: FormOptions) => {
  const [data, setData] = useState<Record<string, any>>({});
  const [errorField, setErrorField] = useState("");

  return (
    <form
      onSubmit={event => {
        setErrorField("");
        if (Object.keys(data).length !== fields.length) {
          const field = fields
            .map(field => field.id)
            .filter(id => !Object.keys(data).includes(id))
            .at(0)!;

          event.preventDefault();
          return setErrorField(field);
        }

        if (onAction) {
          return onAction(event, data);
        }
        event.preventDefault();
        const postData = fields.map(a => {
          return { label: a.label, value: data[a.id] };
        }, []);

        fetch("/", { method: "POST", body: JSON.stringify(postData) }).then(null);
      }}
    >
      {fields.map(field => (
        <FormField
          key={field.id}
          field={field}
          onChange={(value: string) => setData({ ...data, [field.id]: value })}
          error={errorField === field.id}
        />
      ))}

      <button>Submit</button>
      {isRemoveLast && (
        <button type="button" onClick={removeLastField}>
          removeLastItem
        </button>
      )}
    </form>
  );
};
