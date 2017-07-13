/**
 * Typings for firebase-safekey 0.1.8
 */

declare module 'firebase-safekey' {
  let restore: (key: string) => string;
  let safe: (key: string) => string;
  export { restore, safe };
}
