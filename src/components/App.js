import "../css/App.css";
// import logo from "../../public/logo192.png";
import Components from "../components/Contacts";

const App = () => {
  const contacts = [
    {
      id: "karen",
      name: "Karen Isgrigg",
      handle: "karen_isgrigg",
      avatarURL: "http://localhost:5001/karen.jpg",
    },
    {
      id: "richard",
      name: "Richard Kalehoff",
      handle: "richardkalehoff",
      avatarURL: "http://localhost:5001/richard.jpg",
    },
    {
      id: "tyler",
      name: "Tyler McGinnis",
      handle: "tylermcginnis",
      avatarURL: "http://localhost:5001/tyler.jpg",
    },
  ];

  return <div>
        <Components contacts={contacts} />
    </div>;
};

export default App;
