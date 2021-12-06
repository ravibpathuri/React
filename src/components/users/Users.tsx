import React, { ReactElement } from "react";
import {
  StatefulDataTable,
  CustomColumn,
  NumericalColumn,
  StringColumn,
} from "baseui/data-table";
import { StyledLink } from "baseui/link";
import { useStyletron } from "styletron-react";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { getUsersAsync, usersState } from "./UsersSlice";
import { StyledSpinnerNext } from "baseui/spinner";

const columns = [
  NumericalColumn({
    title: "User Id",
    mapDataToValue: (data: any) => data.id,
  }),
  StringColumn({
    title: "Name",
    mapDataToValue: (data: any) => data.name,
  }),
  StringColumn({
    title: "User Name",
    mapDataToValue: (data: any) => data.username,
  }),
  StringColumn({
    title: "Email",
    mapDataToValue: (data: any) => data.email,
  }),
  CustomColumn({
    title: "Address",
    mapDataToValue: (data: any) => data.address,
    renderCell: function Cell(props: any) {
      return (
        <React.Fragment>
          {props.value.street}, {props.value.suite}, {props.value.city} -{" "}
          {props.value.zipcode}
        </React.Fragment>
      );
    },
  }),
  CustomColumn({
    title: "Website",
    mapDataToValue: (data: any) => data.website,
    renderCell: function Cell(props: any) {
      return (
        <React.Fragment>
          <StyledLink target="_blank" href={`https://${props.value}`}>
            https://{props.value}
          </StyledLink>
        </React.Fragment>
      );
    },
  }),
];

interface Props {}

export default function Users({}: Props): ReactElement {
  const [css] = useStyletron();
  const { users, status } = useAppSelector(usersState);
  const dispatch = useAppDispatch();

  React.useEffect(() => {
    dispatch(getUsersAsync(null));
  }, [dispatch]);

  return (
    <div className={css({ height: "800px" })}>
      <h2>Users Data</h2>
      {status == "loading" && (
        <>
          <StyledSpinnerNext />
          Loading...
        </>
      )}

      {status == "idle" && (
        <StatefulDataTable
          columns={columns}
          rows={users.map((user: any) => ({ id: user.id, data: user }))}
        />
      )}
    </div>
  );
}
