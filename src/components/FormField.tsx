import { FormFieldOptions } from "../types/formFieldOptions";
import { createElement } from "react";

export const FormField = ({
  field: { id, type, label, placeholder, selectItems },
  onChange,
  error
}: FormFieldOptions) => {
  const border = error ? "1px solid red" : "";

  if (type === "select") {
    return (
      <select
        onChange={event => onChange?.(event.target.value)}
        defaultValue="selectOne"
        style={{ border }}
      >
        <option value="selectOne" disabled>
          Select One
        </option>
        {selectItems?.map(item => (
          <option key={item} itemID={item}>
            {item}
          </option>
        ))}
      </select>
    );
  }

  if (type === "datepicker" || type === "email") {
    return (
      <input
        style={{ border }}
        type={type === "datepicker" ? "date" : type}
        onChange={event => onChange?.(event.target.value)}
      />
    );
  }

  const DynamicComponent = createElement(type, {
    id,
    placeholder,
    style: { border },
    onChange(event) {
      // @ts-ignore
      onChange?.(event.target.value);
    }
  });

  return (
    <div>
      <label htmlFor={id}>{label}: </label>
      {DynamicComponent}
    </div>
  );
};
