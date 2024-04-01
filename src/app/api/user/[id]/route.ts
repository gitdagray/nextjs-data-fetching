import { type NextRequest } from "next/server"
import { getUser } from "@/lib/getUser"

export async function GET(
    request: NextRequest,
    { params }: { params: { id: string } }
) {
    const { id } = params
    const user = await getUser(Number(id))

    return Response.json(user)
}