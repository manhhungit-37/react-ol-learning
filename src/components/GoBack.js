import { useHistory, useLocation, useParams } from "react-router-dom";

function HomeButton() {
  let history = useHistory();
  let location = useLocation();
  let param = useParams();

  function handleClick() {
    history.push("/");
  }

  return (
    <button type="button" onClick={handleClick}>
      Go home
    </button>
  );
}

export default HomeButton;
