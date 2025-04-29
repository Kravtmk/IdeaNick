import React from "react";

export const Textarea = ({
  name,
  label,
  state,
  setState,
}: {
  name: string;
  label: string;
  state: Record<string, unknown>;
  setState: React.Dispatch<React.SetStateAction<unknown>>;
}) => {
  return (
    <div style={{ marginBottom: 10 }}>
      <label htmlFor={name}>{label}</label>
      <br />y
      <textarea
        onChange={(e) => {
          setState({ ...state, [name]: e.target.value });
        }}
        value={state[name]}
        name={name}
        id={name}
      />
    </div>
  );
};

export default Textarea;
