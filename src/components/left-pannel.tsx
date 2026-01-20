import LeftCards from "../components/left-cards";

type Props = {
  selectedId?: number | null;
  onSelect?: (id: number) => void; // Made optional to avoid errors
}

//Heading for the left pannel
export default function Leftpannel({ selectedId, onSelect }: Props) {
  
  return (
    <div className="w-1/3 border-r p-4 overflow-y-auto">
    <h2 className="text-xl font-semibold mb-4">
        Latest Articles
    </h2>
    <LeftCards
      selectedId={selectedId || null}
      onSelect={onSelect || (() => {})}
    />
    </div>
  )
}
