import { redirect } from "next/navigation";
import { menuPath, todayMenu } from "@/lib/menus";

export default function MenuIndexPage() {
  redirect(menuPath(todayMenu()));
}
