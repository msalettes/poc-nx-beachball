import { package1 } from "@beachball/package1";

export function package2(): string {
  const package1Text = package1();
  return `${package1Text}-package2`;
}

export function package2a(): string {
  const package1Text = package1();
  return `${package1Text}-package2a`;
}
