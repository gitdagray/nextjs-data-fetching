"use client"

import useSWR from "swr"
import { ClearCacheButton } from "./ClearCacheButton"

const fetcher = (url: string) => fetch(url).then((res) => res.json());

export function User2() {
    const { data: user, isLoading } = useSWR("/api/user/2", fetcher);

    if (isLoading) return <p>isLoading is true!</p>

    if (!user) return <p>Failed to load user.</p>

    return (
        <>
            <h1 className="text-5xl text-white">{user.name}</h1>
            <ClearCacheButton cacheName="/api/user/2" />
        </>
    )
}