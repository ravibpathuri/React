import { ChevronDown, Delete, Overflow, Upload } from "baseui/icon";

export default [
  { icon: Upload, label: "GraphQL" },
  { icon: Upload, label: "RestAPI" },
  {
    icon: ChevronDown,
    label: "Apps",
    navExitIcon: Delete,
    children: [
      { icon: Upload, label: "Counter", key: "counter", path: "/counter" },
      { icon: Upload, label: "Users", key: "users", path: "/users" },
      { icon: Upload, label: "Card", key: "card", path: "/card" },
      { icon: Upload, label: "Secondary D" },
    ],
  },
  {
    icon: ChevronDown,
    label: "Primary D",
    navExitIcon: Delete,
    children: [
      {
        icon: ChevronDown,
        label: "Secondary E",
        children: [
          { icon: Upload, label: "Tertiary A" },
          { icon: Upload, label: "Tertiary B" },
        ],
      },
      { icon: Upload, label: "Secondary F" },
    ],
  },
];

export const userItems = [
  { icon: Overflow, label: "Account item1" },
  { icon: Overflow, label: "Account item2" },
  { icon: Overflow, label: "Account item3" },
  { icon: Overflow, label: "Account item4" },
];
