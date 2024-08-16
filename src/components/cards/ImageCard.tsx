import { useSortable } from "@dnd-kit/sortable";
import { ImageGallery } from "../../Types/Global.Types"
import { twMerge } from "tailwind-merge";
import { CSS } from "@dnd-kit/utilities";
import CheckboxIcon from "../icons/CheckboxIcon";
import EmptyCheckboxIcon from "../icons/EmptyCheckboxIcon";

interface imageCard extends ImageGallery{
        className?:string,
        onClick?:(id:string |number)=>void;
        isSelected:boolean
}
export const ImageCard = ({id,slug,isSelected,onClick,className=''}:imageCard) => {
  const {attributes,listeners,setNodeRef,transform,transition,isDragging,index}=useSortable({id:id})
  const style={
        transform: CSS.Transform.toString(transform),
        transition,
        zIndex:isDragging?"100":"auto",
        opacity:isDragging?0.3:1,
        gridRow:index===0?"span 2":"span 1",
        gridColumn:index===0?"span 2":"span 1",
        transfomOrigin:"0 0"
  }
  console.log(isSelected)
  return (
    <div 
    ref={setNodeRef}
    style={style}
    className={twMerge("relative rounded-lg overflow-hidden border border-gray-300 group z-0 aspect-square object-cover",isSelected &&"opacity-60",className)}>
      <button {...listeners}{...attributes} className={twMerge("absolute inset-0 bg-black transition-opacity duration-500 z-50 opacity-0 group-hover:opacity-40",isSelected&& "!opacity-0")}/>
      <button 
      onClick={onClick&&(()=>onClick(id))}
      className={twMerge("absolute top-2 left-2 z-50 group-hover:opacity-100 transition-opacity duration-500",isSelected&&"!opacity-100", !isSelected&& "opacity-0")}>
        {
          !isSelected?(<CheckboxIcon width="24" height="24" fill="white" className="text-blue-600" />):(<EmptyCheckboxIcon />)
        }
      </button>
        <div className={twMerge("flex items-center justify-center h-full", isSelected && "opacity-50")}>
            <img src={slug} alt="images" className="block h-full w-full object-cover" />
        </div>
    </div>
  )
}
