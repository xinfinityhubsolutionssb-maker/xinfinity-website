import { Phone, Mail } from "lucide-react";
import { siteConfig } from "@/config/site";

export default function TopBar() {
  return (
    <div className="hidden bg-[#030712] text-sm text-gray-300 lg:block">
      <div className="container flex h-10 items-center justify-between">

        <div className="flex items-center gap-6">
          <div className="flex items-center gap-2">
            <Phone size={15} className="text-yellow-500" />
            <span>{siteConfig.phone}</span>
          </div>

          <div className="flex items-center gap-2">
            <Mail size={15} className="text-yellow-500" />
            <span>{siteConfig.email}</span>
          </div>
        </div>

        <div>
          SSM : {siteConfig.ssm}
        </div>

      </div>
    </div>
  );
}