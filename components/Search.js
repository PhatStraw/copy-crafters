import {
    IconArrowRight,
    IconSearch,
    IconExternalLink,
  } from "@tabler/icons-react";

const Search = (props) => {
    return(
        <form onSubmit={props.handleSubmit} >
        <div className="fixed inset-x-0 bottom-0 ">
          <IconSearch className="absolute top-3 w-10 left-1 h-6  opacity-50 sm:left-3 sm:top-4 sm:h-8" />
          <input
            className="h-12 w-full text-slate-700  border-t border-zinc-600 focus:border-zinc-800 focus:outline-none focus:ring-1 focus:ring-zinc-800 sm:h-16 sm:py-2 pr-16 pl-16 sm:text-lg"
            type="text"
            value={props.input}
            placeholder="the smithblade, american made, michelin used all over the world, stainless steel"
            onChange={props.handleInputChange}
          />
          <button>
            <IconArrowRight
              onClick={props.handleSubmit}
              className="absolute right-2 top-2.5 h-7 w-7  bg-blue-500 p-1 hover:cursor-pointer hover:bg-slate-600 sm:right-3 sm:top-3 sm:h-10 sm:w-10 text-white"
            />
          </button>
        </div>
      </form>
    )
}

export default Search;