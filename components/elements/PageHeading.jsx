export default function PageHeading({ title, description }) {
  return (
    <>
      <h1 className="font-bold text-3xl">{title}</h1>
      <p className="text-sm md:text-lg mb-6 border-b border-dashed border-neutral-600 pt-2 pb-4 text-neutral-600 dark:text-neutral-400">
        {description}
      </p>
    </>
  );
}