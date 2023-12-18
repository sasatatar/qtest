"use client";

import useSearchParamState from "@/hooks/use-search-param-state";
import { FC } from "react";
import { useDebouncedCallback } from "use-debounce";
import { PropsWithClassName } from "@/types/react.types";
import { Search } from "lucide-react";
import clsx from "clsx";
import styles from "./search-input.module.css";

type SearchInputProps = PropsWithClassName<{
  searchParamName: string;
  debounce?: number;
  placeholder?: string;
}>;

const SearchInput: FC<SearchInputProps> = ({
  searchParamName,
  debounce = 400,
  placeholder,
  className,
}) => {
  const [query, setQuery] = useSearchParamState(searchParamName);

  const handleSearch = useDebouncedCallback((searchTerm: string) => {
    setQuery(searchTerm ? searchTerm : null);
  }, debounce);

  return (
    <div className={clsx(styles.container, className)}>
      <label htmlFor="search" className={styles.label}>
        <Search size={20} />
      </label>
      <input
        id="search"
        type="search"
        placeholder={placeholder}
        className={styles.input}
        defaultValue={query?.toString()}
        onChange={(e) => handleSearch(e.target.value)}
      />
    </div>
  );
};

export default SearchInput;
