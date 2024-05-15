import {lusitana} from "@/app/ui/fonts";
import { GlobeAltIcon } from '@heroicons/react/24/outline';

export default function EyesLogoSmall() {
    return (
        <div className={`${lusitana.className} flex-wrap justify-center text-white`}>
            <GlobeAltIcon className="h-10 w-10 rotate-[15deg]" />
        </div>
    );
}