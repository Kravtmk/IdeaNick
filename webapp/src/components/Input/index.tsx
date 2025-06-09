import React from "react";
import { type FormikProps } from "formik";
import styles from "./index.module.scss";

export const Input = ({
  name,
  label,
  formik,
}: {
  name: string;
  label: string;
  formik: FormikProps<undefined>;
}) => {
  const value = formik.values[name];
  const error = formik.errors[name] as string | undefined;
  return (
    <div className={styles.inputWrapper}>
      <label htmlFor={name} className={styles.label}>
        {label}
      </label>
      <input
        className={styles.input}
        type="text"
        onChange={(e) => {
          void formik.setFieldValue(name, e.target.value);
        }}
        value={value}
        name={name}
        id={name}
      />
      {error && <div style={{ color: "red" }}>{error}</div>}
    </div>
  );
};
