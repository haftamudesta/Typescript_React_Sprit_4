import { twMerge } from "tailwind-merge"
import { ImageGallery } from "../../Types/Global.Types"

interface ImageCard extends Partial<ImageGallery>{
        className?:string,
        onClick?:(id:string |number)=>void,
}

const ImageOverlayCard = ({slug,className=""}:ImageCard) => {
  return (
    <div className={twMerge("rounded overflow-hidden border border-gray-300 flex items-center justify-center h-full",className)}>
        <img src={slug} alt={slug} className="block h-full w-full object-cover" />
    </div>
  )
}

export default ImageOverlayCard