import MenuItem from "../layouts/sidebar/MenuItem"

function Menu({ title, list }) {
  console.log(list)

  return (
    <div className="flex flex-col space-y-1 lg:p-0">
      { title && (
        <div className="hidden lg:block text-sm ml-2 mt-1 mb-2 text-neutral-600 dark:text-neutral-500 font-sora">
          {title}
        </div>
      )}
      {list?.map((item, index) => <MenuItem key={index} {...item}/>)}
    </div>
  )
}

export default Menu