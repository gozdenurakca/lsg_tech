// helper fonksiyonlar

const ALL_EXTS = [
  ".com.tr",
  ".net.tr",
  ".org.tr",
  ".com",
  ".net",
  ".org",
  ".io",
  ".biz",
  ".co",
];

export function stripExtension(raw: string): string {
  let base = raw
    .trim()
    .toLowerCase()
    .replace(/https?:\/\//, "")
    .replace(/\/$/, "");

  ALL_EXTS.forEach((e) => {
    if (base.endsWith(e)) {
      base = base.slice(0, -e.length);
    }
  });

  return base;
}

export function extToSlug(ext: string) {
  return ext.replace(/^\./, "").replace(/\./g, "-");
}