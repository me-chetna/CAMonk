import { useState } from "react"
import LeftPanel from "./left-pannel"
import RightPanel from "./right-pannel"
function BelowNav() {
    const [selectedBlogId, setSelectedBlogId] = useState<number | null>(null)
    return (
        <>
        <div className="bg-gray-100 mt-15">
            <div className=" pt-8 text-center text-4xl font-bold text-blue-800">CAMonk Blog</div>
            <div className="pt-3 text-center text-gray-600 text-l">Stay Tuned for further updates of financial trends, accounting and career growth</div>
            <hr className="mt-10 text-white"></hr>
        </div>
        <div className="flex flex-row w-full min-h-screen">
            {/* LEFT */}
            <div className="w-[35%] border-r">
                <LeftPanel
                selectedId={selectedBlogId}
                onSelect={setSelectedBlogId}
                />
            </div>

            {/* RIGHT */}
            <div className="w-[65%]">
                <RightPanel blogId={selectedBlogId} />
            </div>
        </div>
        </>

    )
}
export default BelowNav