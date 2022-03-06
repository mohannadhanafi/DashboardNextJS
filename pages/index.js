import Header from "./components/Header";
import Sidebar from "./components/sidebar";

export default function Home() {
  return (
    <div>
      <div className="flex ">
        <Sidebar />
        <div className="w-screen">
          <Header />
        </div>
      </div>
    </div>
  );
}
