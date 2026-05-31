import { Button, Label, SearchField } from "@heroui/react";

export function SearchItems() {
  return (
    <SearchField name="search" className="w-2xl">
      <SearchField.Group>
        <SearchField.SearchIcon />
        <SearchField.Input placeholder="Search..." />
        <SearchField.ClearButton />
        <Button className={'my-3 rounded-s-none rounded-e-lg'}>Search</Button>
      </SearchField.Group>
    </SearchField>
  );
}