import { useState, useEffect } from "react";
import { ClickOutsideAlerter } from "../../common/hooks";

function ColorSwatch({ color }) {
  return (
    <span className="color-swatch" style={{ backgroundColor: color }}></span>
  );
}

export default function Select({
  label,
  values = [],
  onChange,
  shouldHide,
  selectedValue
}) {
  const [currentLabel, setCurrentLabel] = useState(`Select ${label}`);
  const [isExpanded, setExpanded] = useState(false);
  const [isFlashing, setFlashing] = useState(false);

  useEffect(() => {
    if (!selectedValue && selectedValue !== undefined) {
      setCurrentLabel(`Select ${label}`);
      setFlashing(true);
      setTimeout(() => setFlashing(false), 2000);
    } else if (selectedValue) {
      setFlashing(true);
      setTimeout(() => setFlashing(false), 2000);
    }
    // console.log({ selectedValue, isFlashing });
  }, [selectedValue]);

  return (
    <ClickOutsideAlerter
      callback={() => {
        setExpanded(false);
      }}
    >
      <div
        className={`nice-select product-options-values select_option wide 
        ${isExpanded ? "open" : ""} 
        ${shouldHide ? "disabled" : ""}
        ${isFlashing ? "flash" : ""}
        `}
        onClick={() => {
          if (shouldHide) {
            return;
          }

          setExpanded(!isExpanded);
        }}
      >
        <span className="current">{currentLabel}</span>
        <ul className="list">
          <li
            data-value="Select Stock"
            className="option"
            onClick={() => {
              if (shouldHide) {
                return;
              }

              setCurrentLabel(`Select ${label}`);
              setExpanded(false);
              onChange({ target: { value: "" } });
            }}
          >
            {`Select ${label}`}
          </li>
          {values.map(({ label, color, valueId: value }) => (
            <li
              data-value={value}
              key={value}
              className={`option ${currentLabel === label ? "selected" : ""}`}
              onClick={() => {
                if (shouldHide) {
                  return;
                }

                setCurrentLabel(label);
                setExpanded(false);
                onChange({ target: { value } });
              }}
            >
              {label} {color ? <ColorSwatch color={color} /> : ""}
            </li>
          ))}
        </ul>
      </div>
    </ClickOutsideAlerter>
  );
}
