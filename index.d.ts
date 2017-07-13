/**
 * Typings for firebase-safekey 0.1.8
 */

declare module 'firebase-safekey' {
  type Mapping = {[from: string]: string};

  export function safe<T = string>(input: T, mapping?: Mapping): T;
  export function restore<T = string>(input: T, mapping?: Mapping): T;
  export function config(mapping?: Mapping): any;
}
