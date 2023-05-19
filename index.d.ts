export default declare function Overclass(
  styles: Record<string, string | false | undefined | null>
): (
  literal: (string | false | undefined | null)[],
  ...args: (string | false | undefined | null)[]
) => string;

export declare function oc(
  styles: Record<string, string | false | undefined | null>
): (
  literal: (string | false | undefined | null)[],
  ...args: (string | false | undefined | null)[]
) => string;

export declare function cn(
  literal: (string | false | undefined | null)[],
  ...args: (string | false | undefined | null)[]
): string;

export declare function jn(
  ...args: (string | false | undefined | null)[]
): string;
