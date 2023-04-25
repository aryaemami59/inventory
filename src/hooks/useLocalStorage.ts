import { useEffect, useState } from "react";

const getSavedValue = <T extends NonNullable<unknown>>(
  key: string,
  initialValue: T | ((...args: unknown[]) => T)
) => {
  const savedValue = JSON.parse(localStorage.getItem(key)!) as T | undefined;
  if (savedValue) return savedValue;

  if (initialValue instanceof Function) return initialValue();
  return initialValue;
};

const useLocalStorage = <T extends NonNullable<unknown>>(
  key: string,
  initialValue: T | ((...args: unknown[]) => T)
) => {
  const [value, setValue] = useState<T>(() =>
    getSavedValue<T>(key, initialValue)
  );
  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue] as const;
};

export default useLocalStorage;
