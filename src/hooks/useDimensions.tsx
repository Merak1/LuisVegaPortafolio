import { useMemo, useSyncExternalStore } from "react";

const subscribe = (callback: {
  (this: Window, ev: UIEvent): any;
  (this: Window, ev: UIEvent): any;
}) => {
  window.addEventListener("resize", callback);
  return () => {
    window.removeEventListener("resize", callback);
  };
};

export default function useDimensions(ref: any) {
  const dimensions = useSyncExternalStore(subscribe, () =>
    JSON.stringify({
      width: ref.current?.offsetWidth ?? 0, // 0 is default width
      height: ref.current?.offsetHeight ?? 0, // 0 is default height
    })
  );
  return useMemo(() => JSON.parse(dimensions), [dimensions]);
}
