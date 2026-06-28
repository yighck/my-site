import { localizeRichZh } from "@/lib/instrumentation-kb-rich";

const DISPLAY_LOCALIZE_BYPASS_KEYS = new Set(["id", "code", "references", "typicalReferences"]);

function localizeDisplayText(text: string) {
  return localizeRichZh(text).replace(/\?{3,}/g, "").trim();
}

export function localizeDisplayValue<T>(value: T, key?: string): T {
  if (DISPLAY_LOCALIZE_BYPASS_KEYS.has(key ?? "")) {
    return value;
  }

  if (typeof value === "string") {
    return localizeDisplayText(value) as T;
  }

  if (Array.isArray(value)) {
    return value.map((item) => localizeDisplayValue(item, key)) as T;
  }

  if (value && typeof value === "object") {
    return Object.fromEntries(
      Object.entries(value).map(([entryKey, entryValue]) => [
        entryKey,
        DISPLAY_LOCALIZE_BYPASS_KEYS.has(entryKey)
          ? entryValue
          : localizeDisplayValue(entryValue, entryKey),
      ]),
    ) as T;
  }

  return value;
}

export function formatDisplayId(id: string) {
  return id
    .split("-")
    .map((part) => {
      if (!part) {
        return part;
      }

      return part.charAt(0).toUpperCase() + part.slice(1);
    })
    .join(" 路 ");
}

export function toDisplayPairs(value: unknown) {
  if (!value || typeof value !== "object" || Array.isArray(value)) {
    return [];
  }

  return Object.entries(value).filter(([, entryValue]) => {
    if (entryValue === null || entryValue === undefined) {
      return false;
    }

    if (Array.isArray(entryValue)) {
      return entryValue.length > 0;
    }

    if (typeof entryValue === "object") {
      return Object.keys(entryValue).length > 0;
    }

    return true;
  });
}
