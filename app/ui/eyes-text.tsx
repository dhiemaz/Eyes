import {lusitana} from "@/app/ui/fonts";
import { GlobeAltIcon } from '@heroicons/react/24/outline';

export default function EyesText() {
    return (
        <div className={`${lusitana.className} flex-wrap justify-center text-white`}>
            <p className="text-[42px]">EYES - Geodata Management System</p>
        </div>
    );
}