import { LuSearch } from "react-icons/lu";

const SearchBar = () => {

  return (
    <div className='flex-1 h-full p-4 relative'>
      <input placeholder='Search products' className='border-2 rounded-full w-full h-full px-4'/>
      <div className='absolute right-8 top-1/2 -translate-y-1/2'>
        <LuSearch size='20'/>
      </div>
    </div>
  )
}

export default SearchBar;
