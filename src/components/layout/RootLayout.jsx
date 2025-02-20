import Sidebar from "../navbar/Sidebar";
import Header from "../navbar/Header";

const RootLayout = ({ children }) => {
  return (
    <div className="flex h-screen ">
      <Sidebar />
      <div className="flex flex-col flex-grow ">
        <Header />
        <main>{children}</main>
      </div>
    </div>
  );
};
export default RootLayout;
