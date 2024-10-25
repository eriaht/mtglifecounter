export default function Menu({ children, className }) {
  return <div className={`menu ${className ? className : ""}`}>{children}</div>;
}
