import { useState } from "react"
import LeftPanel from "./left-pannel"
function BelowNav() {
    const [selectedBlogId, setSelectedBlogId] = useState<number | null>(null)
    return (
        <>
        <div className="bg-gray-100">
            <div className=" pt-8 text-center text-4xl font-bold">CAMonk Blog</div>
            <div className="pt-3 text-center text-gray-600 text-l">Stay Tuned for further updates of financial trends, accounting and career growth</div>
            <hr className="mt-10 text-white"></hr>
        </div>
        <LeftPanel
        selectedId={selectedBlogId}
        onSelect={setSelectedBlogId}
        />
        </>

    )
}
export default BelowNav