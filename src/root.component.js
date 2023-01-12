import Navbar from "./components/Navbar";

export default function Root(props) {
  return (
    <div>
      <div>
        <Navbar />
      </div>
      <h1>Graph Visualizations!</h1>
      <section>{props.name} is mounted!</section>
    </div>
  );
}
