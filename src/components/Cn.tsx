export default function Cn(...classes: string[]) {
  return classes.filter(Boolean).join();
}
