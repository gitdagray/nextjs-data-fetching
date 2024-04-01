"use client"

import useSWR from "swr"
import { getUserAction } from "@/app/actions/actions"
import { ClearCacheButton } from "./ClearCacheButton"

export function User3() {
    const { data: user, isLoading } = useSWR("getUserAction", getUserAction);

    if (isLoading) return <p>isLoading is true!</p>

    if (!user) return <p>Failed to load user.</p>

    return (
        <>
            <h1 className="text-5xl text-white">{user.name}</h1>
            <ClearCacheButton cacheName="getUserAction" />
        </>
    )
}