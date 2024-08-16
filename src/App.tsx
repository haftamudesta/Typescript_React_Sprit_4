import './App.css'
import { useState } from 'react';
import {closestCenter, DndContext, DragEndEvent, DragStartEvent, KeyboardSensor, PointerSensor, TouchSensor, useSensor, useSensors,DragOverlay} from '@dnd-kit/core';
import {arrayMove, sortableKeyboardCoordinates,SortableContext, rectSortingStrategy} from '@dnd-kit/sortable';
import { ImageGallery } from './Types/Global.Types';
import { initialDataGallery } from './data';
import { ImageCard } from './components/cards/ImageCard';
import AddImageCard from './components/cards/AddImageCard';
import ImageOverlayCard from './components/cards/ImageOverlayCard';
import Header from './components/header/Header';
import AnimatedLoadingIcon from './components/icons/AnimatedLoadingIcon';

function App() {
  const [activeItem,setActiveItem]=useState<ImageGallery | null>(null);
  const [galleryData,setGalleryData]=useState(initialDataGallery);
  const sensors=useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor,{
    coordinateGetter: sortableKeyboardCoordinates}),
    useSensor(TouchSensor),
  )
  const handleDragStart=(event:DragStartEvent)=>{
    const {id}=event.active;
    if(!id) return;
    const currentImage=galleryData.find((item)=>item.id===id);
    setActiveItem(currentImage || null);
  }
  const handleDragEnd=(event:DragEndEvent)=>{
    setActiveItem(null);
    const {active,over}=event;
    if(!over){
      return
    }
    if(active.id!==over.id){
      setGalleryData((items)=>{
        const oldIndex=items.findIndex((item)=>item.id===active.id);
        const newIndex=items.findIndex((item)=>item.id===over.id);
        return arrayMove(items, oldIndex,newIndex)
      })
    }
  }
  const handleImageSelect=(id:string | number)=>{
    const newImageGallery=galleryData.map((imageItem)=>{
      if(imageItem.id===id) {
        return{
          ...imageItem,
          isSelected: !imageItem.isSelected
        }
      }
      return imageItem
    });
    setGalleryData(newImageGallery)
  }
  const handleOnDelete = (selectedItems: ImageGallery[]) => {
    // if galleryData.isSelected === true then filter out the selected items and return the rest
    const newGalleryData = galleryData.filter(
      (imageItem) => !selectedItems.includes(imageItem)
    );

    setGalleryData(newGalleryData);
  };

  return (
    <>
    <div className='flex items-center justify-center mt-8 gap-12'>
        <AnimatedLoadingIcon height='40' width='40' fill='green' stroke='yellow'/>
        <h1 className='text-3xl text-slate-700 font-bold '>Image Gallery</h1>
        <AnimatedLoadingIcon height='80' width='80' fill='blue' stroke='red'/>
      </div>
    <div className='min-h-screen'>
      <div className='container flex flex-col items-center'>
        <div className='bg-white my-8 rounded-lg shadow max-w-5xl grid divide-y'>
          <Header onDelete={handleOnDelete} galleryData={galleryData}/>
          <DndContext
          sensors={sensors}
          collisionDetection={closestCenter}
          onDragStart={handleDragStart}
          onDragEnd={handleDragEnd}
          >
            <div className='grid grid-cols-2 md:grid-cols-5 gap-8 p-8'>
              <SortableContext
              items={galleryData}
              strategy={rectSortingStrategy}
              >
                {
                  galleryData.map((imageItem)=>(
                    <ImageCard
                    key={imageItem.id}
                    id={imageItem.id}
                    isSelected={imageItem.isSelected}
                    slug={imageItem.slug}
                    onClick={handleImageSelect}
                    />
                  ))
                }
              </SortableContext>
              <AddImageCard setGalleryData={setGalleryData} />
              <DragOverlay adjustScale={true} wrapperElement='div'>
              {activeItem ? (
                  <ImageOverlayCard className='absolute h-full w-full' 
                  slug={activeItem.slug}
                  />
                ):null}
              </DragOverlay>
            </div>
          </DndContext>
        </div>
      </div>
    </div>
    </>
  )
}

export default App;
