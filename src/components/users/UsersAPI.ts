import { UsersData } from "./__mocks__/UsersData";

// A mock function to mimic making an async request for data
export function fetchUsers(userId: any) {
  return new Promise<{ data: any }>((resolve) =>
    setTimeout(() => resolve({ data: UsersData }), 10000)
  );
}
