import { twMerge } from "tailwind-merge"
import { ImageGallery } from "../../Types/Global.Types"
import { useState } from "react"
import { FcAddImage } from "react-icons/fc";
import Modal from "../modal/Modal";
import { IoClose } from "react-icons/io5";
import { nanoid } from "nanoid";


interface AddImageCard{
        setGalleryData:React.Dispatch<React.SetStateAction<ImageGallery[]>>
}


const AddImageCard = ({setGalleryData}:AddImageCard) => {
        const [isModalOpen,setIsModalOpen]=useState(false);
        const handleImageSubmit=(event:React.FormEvent<HTMLFormElement>)=>{
                event.preventDefault();
                const imageUrl=event.currentTarget["image-url"].value;
                if(!imageUrl) return
                setGalleryData((prev)=>[
                        ...prev,{
                                id:nanoid(),
                                slug:imageUrl,
                                isSelected:false
                        }])
                        setIsModalOpen(false)
        }
  return (
    <div>
        <button type="button" 
        onClick={()=>setIsModalOpen(true)}
        className={twMerge("rounded-lg border border-dashed border-slate-300 flex flex-col items-center justify-center cursor-pointer hover:bg-gray-300 transition-colors duration-500 aspect-square p-8")}>
                <FcAddImage className="text-5xl"/>
                <p className="font-semibold text-sm md:text-base whitespace-nowrap">Add Image</p>
        </button>
        <Modal open={isModalOpen} handleClose={()=>setIsModalOpen(false)} modalId="addImageModal">
                <form onSubmit={handleImageSubmit} className="relative py-12 px-6 bg-neutral-50 rounded w-[680px] max-h-[95vh]">
                        <IoClose onClick={()=>setIsModalOpen(false)} width={31} className="absolute text-3xl top-4 right-4 cursor-pointer text-red-600 hover:text-red-700 transition-all"/>
                                <h2 className="text-2xl font-semibold text-center mb-8">Add New Image URL</h2>
                                <input type="url" name="image-url" id="image-url" placeholder="https://example.com/yourimage.jpg" className="px-8 py-3 bg-emerald-600 text-white rounded hover:bg-emerald-700 transition-colors duration-300 border border-gray-300" />
                                <div className="flex justify-end mx-4">
                                        <button type="submit" className="text-2xl font-semibold px-8 py-2.5 bg-emerald-500 text-white rounded hover:bg-emerald-700 transition-colors duration-300">Add Image</button>
                                </div>
                </form>
        </Modal>
    </div>
  )
}

export default AddImageCard