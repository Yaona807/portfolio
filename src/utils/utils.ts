export function getImageSrc(filepath: string): string {
  if (process.env.NODE_ENV === "production") {
    return `/portfolio${filepath}`;
  } else {
    return filepath;
  }
}
