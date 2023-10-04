
export default function SectionHeading({ title, icon, className=''}) {
  return (
    <div className={`flex items-center gap-1 text-2xl fonst-medium text-neutral-800 dark:text-neutral-300 ${className}`}>
      {icon && <>{icon}</>}
      <h2 className="capitalize font-bold ">{title}</h2>
    </div>
  )
}
