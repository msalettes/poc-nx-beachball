import { package1 } from "@beachball/package1";
import { package2 } from "@beachball/package2";

export function package3(): string {
  return package2() + '-package3' + '-' + package1();
}
