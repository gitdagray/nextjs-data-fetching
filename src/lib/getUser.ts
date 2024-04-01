import { delay } from "./delay"

type User = {
    name: string;
}

export async function getUser(id: number): Promise<User> {
    const user = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`, {
        cache: 'no-store'
    })

    await delay(3000)

    return user.json()
}