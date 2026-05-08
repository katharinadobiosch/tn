type ProductListProps = {
  items: string[];
};

export function ProductList({ items }: ProductListProps) {
  return (
    <ul className="grid gap-3 sm:grid-cols-2">
      {items.map((item) => (
        <li
          key={item}
          className="border-b border-[#24231F]/15 pb-3 text-[#555149]"
        >
          {item}
        </li>
      ))}
    </ul>
  );
}
