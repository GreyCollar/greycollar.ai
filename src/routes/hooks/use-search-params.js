import { useSearchParams as _useSearchParams } from "react-router-dom";
import { useMemo } from "react";

// ----------------------------------------------------------------------

export function useSearchParams() {
  const [searchParams] = _useSearchParams();

  return useMemo(() => searchParams, [searchParams]);
}
