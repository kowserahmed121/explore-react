import "./style.css";
export default function Load({ load }) {
  const { userId, title } = load;
  return (
    <div className="style">
      <li>user id : {userId}</li>
      <li>title : {title}</li>
    </div>
  );
}
