import { useEffect } from "react";

export function useKeyPressed(keyLookup: (event: KeyboardEvent) => any) {

  useEffect(() => {
    const downHandler = (ev: KeyboardEvent) => keyLookup(ev);

    document.addEventListener("keydown", downHandler);

    return () => {
      document.removeEventListener("keydown", downHandler);
    };
  }, [keyLookup]);
  return null
}