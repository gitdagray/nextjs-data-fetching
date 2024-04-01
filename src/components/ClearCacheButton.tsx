"use client"

import { useSWRConfig } from "swr"
import { Button } from "./ui/button"

export function ClearCacheButton({ cacheName }: { cacheName: string }) {
    const { mutate } = useSWRConfig()

    const handleClick = () => {
        mutate(
            cacheName, // which cache keys are updated
            undefined, // update cache data to `undefined`
            { revalidate: false } // do not revalidate
        )
    }

    return (
        <Button
            className="rounded mt-20"
            variant="destructive"
            onClick={handleClick}
        >
            Clear Cache
        </Button>
    )
}