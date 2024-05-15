import {lusitana} from "@/app/ui/fonts";
import { GlobeAltIcon } from '@heroicons/react/24/outline';

export default function EyesLogo() {
  return (
      <div className={`${lusitana.className} flex-wrap justify-center text-white`}>
        <GlobeAltIcon className="h-24 w-24 rotate-[15deg]" />
      </div>
  );
}