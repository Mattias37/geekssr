import React, { useCallback } from "react";
import { useField } from "formik";
import { InputField } from "../../molecules/input-field";
import { InputTextStyled } from "../../molecules/input-text/styled";
import { CheckboxMainOuter } from "./styles";

export const InputDate = ({
  name,
  type,
  disabled,
  label,
  placeholder,
  required,
  icon,
  config,
}: InputPropsForm) => {
  const [fieldYear, metaYear, helperYear] = useField({ name: "year" });
  const [fieldDay, metaDay, helperDay] = useField({ name: "day" });
  const [fieldMonth, metaMonth, helperMonth] = useField({ name: "month" });
  const { setValue: setYear } = helperYear;
  const { setValue: setDay } = helperDay;
  const { setValue: setMonth } = helperMonth;
  const handleCallbackDay = useCallback(
    (e, { value }) => {
      setDay(value);
    },
    [setDay]
  );
  const handleCallbackMonth = useCallback(
    (e, { value }) => {
      setMonth(value);
    },
    [setMonth]
  );
  const handleCallbackYear = useCallback(
    (e, { value }) => {
      setYear(value);
    },
    [setYear]
  );
  return (
    <CheckboxMainOuter>
        <InputField
          date
          required={required}
          icon={icon}
          name={fieldDay.name}
          disabled={disabled}
          errors={metaDay.error}
          touched={metaDay.touched}
        >
          <InputTextStyled
            {...fieldDay}
            date
            config={config}
            type={type}
            value={fieldDay.value}
            onChange={handleCallbackDay}
            placeholder={"DIA"}
            disabled={disabled}
            autoCapitalize="none"
          />
        </InputField>
        <InputField
          required={required}
          icon={icon}
          name={fieldMonth.name}
          disabled={disabled}
          errors={metaMonth.error}
          touched={metaMonth.touched}
        >
          <InputTextStyled
            {...fieldMonth}
            config={config}
            date
            type={type}
            value={fieldMonth.value}
            onChange={handleCallbackMonth}
            placeholder={"MES"}
            disabled={disabled}
            autoCapitalize="none"
          />
        </InputField>
        <InputField
          required={required}
          icon={icon}
          name={fieldYear.name}
          disabled={disabled}
          errors={metaYear.error}
          touched={metaYear.touched}
        >
          <InputTextStyled
            {...fieldYear}
            date
            config={config}
            placeholder={"AÑO"}
            type={type}
            value={fieldYear.value}
            onChange={handleCallbackYear}
            disabled={disabled}
            autoCapitalize="none"
          />
        </InputField>
      </CheckboxMainOuter>
  );
};
