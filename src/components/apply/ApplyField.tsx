"use client";

export default function ApplyField({
  id,
  name,
  label,
  type = "text",
  icon,
  focused,
  setFocused,
}: any) {
  const isFocused = focused === id;

  return (
    <div>
      <label className="field-label" htmlFor={id}>
        {icon}
        {label}
      </label>

      <input
        id={id}
        name={name}
        type={type}
        className="field-input"
        onFocus={() => setFocused(id)}
        onBlur={() => setFocused(null)}
        style={{
          borderColor: isFocused ? "rgba(30,106,220,0.5)" : undefined,
        }}
      />
    </div>
  );
}
