import Image from "next/image";
import { formatCurrency } from "@monorepo-setup/utils";
export default function Home() {
  return <>{formatCurrency(1000, "USD")}</>;
}
