import { Form, FormGroup } from "react-bootstrap";
import { useFormContext, Controller } from "react-hook-form";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarDay } from "@fortawesome/free-solid-svg-icons";
import React, { useContext } from "react";
import { LangKontext } from "komponenty/Kontext";

function CostDate(props) {
  const text = useContext(LangKontext);
  const TXT = text[0];
  const { control } = useFormContext();
  return (
    <FormGroup>
      <FontAwesomeIcon icon={faCalendarDay} className="px-2 awesome_light" />
      <Form.Label>{TXT.transfer_date} *</Form.Label>
      <Controller
        name="transfer_date"
        control={control}
        render={({ field }) => (
          <DatePicker
            onKeyDown={(e) => {
              e.preventDefault();
            }}
            dateFormat="dd-MM-yyyy"
            className="datepickerOverride"
            onChange={field.onChange}
            selected={field.value}
            minDate={props.today}
            calendarStartDay={1}
          />
        )}
      />
    </FormGroup>
  );
}

export default CostDate;
