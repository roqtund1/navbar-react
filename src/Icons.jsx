export default function Icons({ items }) {
  return (
    <div className="icons">
      {items.map((item) => {
        return <a href={item.url} key={item.id} className="icon">{item.icon}</a>;
      })}
    </div>
  );
}
