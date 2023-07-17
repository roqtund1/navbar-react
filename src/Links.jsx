export default function Links({ items, showLinks, linksRef }) {
  const linkStyles = {
    height: showLinks
      ? `${linksRef.current.getBoundingClientRect().height}px`
      : "0px",
  };

  return (
    <div style={linkStyles} className="links-container">
      <ul ref={linksRef} className="links">
        {items.map((item) => {
          return (
            <a key={item.id} className="link " href={item.url}>
              {" "}
              {item.text}
            </a>
          );
        })}
      </ul>
    </div>
  );
}
