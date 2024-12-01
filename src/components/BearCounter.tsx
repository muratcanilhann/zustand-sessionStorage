import { useBearStore } from "../store/bears"

export default function BearCounter(){
    const bears = useBearStore((state) => state.bears);

    return(
        <h1>{bears}</h1>
    )
}