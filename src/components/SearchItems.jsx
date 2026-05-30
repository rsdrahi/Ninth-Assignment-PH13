import { Label, SearchField } from "@heroui/react";

export function SearchItems() {
  return (
    <SearchField name="search" className="w-2xl">
      <SearchField.Group>
        <SearchField.SearchIcon />
        <SearchField.Input placeholder="Search..." />
        <SearchField.ClearButton />
      </SearchField.Group>
    </SearchField>
  );
}