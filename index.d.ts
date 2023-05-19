export declare function Overclass(
  styles: Record<string, string | false | undefined | null>
): (
  literal: TemplateStringsArray,
  ...args: (string | false | undefined | null)[]
) => string;

export declare function oc(
  styles: Record<string, string | false | undefined | null>
): (
  literal: TemplateStringsArray,
  ...args: (string | false | undefined | null)[]
) => string;

export declare function cn(
  literal: TemplateStringsArray,
  ...args: (string | false | undefined | null)[]
): string;

export declare function jn(
  ...args: (string | false | undefined | null)[]
): string;

export default Overclass;
