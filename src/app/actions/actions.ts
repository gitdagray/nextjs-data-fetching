"use server"

import { getUser } from "@/lib/getUser"

export async function getUserAction() {
    const user = await getUser(3)

    return user
}