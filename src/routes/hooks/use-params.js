import { useParams as _useParams } from "react-router-dom";
import { useMemo } from "react";

// ----------------------------------------------------------------------

export function useParams() {
  const params = _useParams();

  return useMemo(() => params, [params]);
}
