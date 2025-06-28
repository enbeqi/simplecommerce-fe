"use client";

type DropdownProps = {
  id: string;
  labelText: string;
  options: { value: string; label: string }[];
  selectedValue: string;
  className?: string;
  onChange: (id: string, value: string) => void;
};

export function Dropdown({
  id,
  labelText,
  options,
  selectedValue,
  className,
  onChange,
}: DropdownProps) {
  return (
    <div className={`flex flex-col w-full ${className}`}>
      <label htmlFor={id}>{labelText}</label>
      <select
        id={id}
        className="p-2 !text-base border border-gray-300 rounded"
        value={selectedValue}
        onChange={(e) => onChange(id, e.target.value)}
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
}
