import { useEffect, useState } from "react";
import { PAGINATION } from "@/config/constants";

interface UseEntitySearchProps<
  T extends {
    search: string;
    page: number;
  }
> {
  params: T;
  setParams: (params: T) => void;
  debounceMs?: number;
}

export function useEntitySearch<
  T extends {
    search: string;
    page: number;
  }
>({ params, setParams, debounceMs = 500 }: UseEntitySearchProps<T>) {
  const [localeSearch, setLocaleSearch] = useState(params.search);

  useEffect(() => {
    if (localeSearch === "" && params.search !== "") {
      setParams({
        ...params,
        search: "",
        page: PAGINATION.DEFAULT_PAGE,
      });
      return;
    }

    const timer = setTimeout(() => {
      if (localeSearch !== params.search) {
        setParams({
          ...params,
          search: localeSearch,
          page: PAGINATION.DEFAULT_PAGE,
        });
      }
    }, debounceMs);

    return () => clearTimeout(timer);
  }, [localeSearch, params, setParams, debounceMs]);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setLocaleSearch(params.search);
  }, [params.search]);

  return {
    searchValue: localeSearch,
    onSearchChange: setLocaleSearch,
  };
}
