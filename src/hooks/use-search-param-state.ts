import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

const useSearchParamState = (name: string) => {
  const searchParams = useSearchParams();
  const { replace } = useRouter();
  const pathname = usePathname();
  const [state, setState] = useState(searchParams.get(name));
  useEffect(() => {
    if (searchParams.get(name) === state) {
      return;
    }
    const newSearchParams = new URLSearchParams(searchParams);
    if (state === null) {
      newSearchParams.delete(name);
    } else {
      newSearchParams.set(name, state);
    }
    const url = `${pathname}${
      newSearchParams.toString() === "" ? "" : "?"
    }${newSearchParams.toString()}`;
    replace(url);
  }, [state, searchParams, name, pathname, replace]);
  return [state, setState] as const;
};

export default useSearchParamState;
