import { Badge } from "@/components/ui/badge"
import { Input, FormInput } from "@/components/ui/input"

export default function Workouts() {
  return (
    <div>
      <h1 className="text-2xl font-semibold">This is a test for components</h1>
      <p className="mt-2 text-sm text-zinc-400">This is the Gallery</p>
      <Badge variant="pr">PR</Badge>
      <Badge variant="warmup">Warmup</Badge>
      <Badge variant="workingSet">Working Set</Badge>
      <Badge variant="completed">Completed</Badge>
      <Badge variant="failed">Failed</Badge>
      <Badge variant="current">Current</Badge>
      <br />
      <br />
    <Input />
    <FormInput error="This field is required" />
    </div>
  )
}
