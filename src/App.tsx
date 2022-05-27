import { useCallback, useState } from "react";
import { Form } from "./components/Form";
import { Builder } from "./components/Builder";
import { FormItem } from "./types/formItem";
import styles from "./assets/Style.module.scss";

function App() {
  const [fields, setFields] = useState<FormItem[]>([]);

  const addField = useCallback(
    (data: FormItem) => {
      setFields(fields => [...fields, { ...data, id: Date.now().toString() }]);
    },
    [setFields]
  );
  const removeLastField = useCallback(() => {
    setFields(fields => fields.slice(0, -1));
  }, [setFields]);

  return (
    <div className={styles.app}>
      <Builder addField={addField} />
      <Form fields={fields} removeLastField={removeLastField} />
    </div>
  );
}

export default App;
