import * as React from "react";
import { Card, StyledBody, StyledAction } from "baseui/card";
import { Button } from "baseui/button";
import { DatePicker } from "baseui/datepicker";
export default function Example() {
  const [value, setValue] = React.useState([new Date()]);
  return (
    <React.Fragment>
      <Card
        overrides={{ Root: { style: { width: "328 px", marginLeft: 10 } } }}
        headerImage={"https://source.unsplash.com/user/erondu/700x400"}
        title="Tour "
      >
        <StyledBody>
          Welcome to the tour ! Select date range below and book your slot to
          join.
        </StyledBody>
        <div>
          <strong>Select Date </strong>
        </div>
        <DatePicker
          value={value}
          onChange={({ date }) => setValue(Array.isArray(date) ? date : [date])}
          range
        />
        <StyledAction>
          <Button overrides={{ BaseButton: { style: { width: "100%" } } }}>
            Book now!
          </Button>
        </StyledAction>
      </Card>
    </React.Fragment>
  );
}
