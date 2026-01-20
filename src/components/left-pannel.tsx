import Leftcard from "../components/left-cards"

//Heading for the left pannel
export default function Leftpannel() {
  return (
    <div className="w-1/3 border-r p-4 overflow-y-auto">
    <h2 className="text-xl font-semibold mb-4">
        Latest Articles
    </h2>

    {/* Calling the left card component */}
    <Leftcard />
    </div>
  )
}
