import { faGear } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Loading() {
    // You can add any UI inside Loading, including a Skeleton.
    return (
        <div className="flex fixed z-website-loader m-auto top-0 bottom-0 left-0 right-0 bg-black justify-center items-center overflow-[show]">
            <FontAwesomeIcon icon={faGear} className="text-black text-[10vh] animate-[spin_2s_linear_infinite]" />
        </div>
    )
}