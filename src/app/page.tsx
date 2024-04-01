import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Suspense } from "react"
import { getUser } from "@/lib/getUser"
import { User1 } from "@/components/User1"
import { User2 } from "@/components/User2"
import { User3 } from "@/components/User3"

export default async function UsersPage() {

  const user = await getUser(1)

  return (
    <Tabs defaultValue="server-fetch" className="w-full p-10">
      <TabsList className="rounded">
        <TabsTrigger value="server-fetch">Server Fetch</TabsTrigger>
        <TabsTrigger value="api-route">API Route</TabsTrigger>
        <TabsTrigger value="server-action">Server Action</TabsTrigger>
      </TabsList>
      <TabsContent value="server-fetch">

        <User1 user={user.name} />

      </TabsContent>
      <TabsContent value="api-route">
        <Suspense fallback={<p>Loading API Route Data...</p>}>
          <User2 />
        </Suspense>
      </TabsContent>
      <TabsContent value="server-action">
        <Suspense fallback={<p>Loading Server Action Data...</p>}>
          <User3 />
        </Suspense>
      </TabsContent>
    </Tabs>


  )
}
