import A from "../components/A";
import Head from "next/head";

const MainContainer = ({ children }) => {
  return (
    <>
      <Head>
        <meta keywords="next, sasha" />
        <title>Главная страница</title>
      </Head>
      <nav className="navbar" style={{ background: "tomato", padding: 20 }}>
        <A href={"/"} text={"Главная"} />
        <A href={"/users"} text={"Пользователи"} />
      </nav>
      <div>{children}</div>
    </>
  );
};
export default MainContainer;
