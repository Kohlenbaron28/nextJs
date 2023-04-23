import { useRouter } from "next/router";
import MainContainer from "../../components/MainContainer";

export default function ({ user }) {
  const { query } = useRouter();
  return (
    <MainContainer>
      <div>
        <h1>Пользователь c id {query.id}</h1>
        <p>Имя пользователя {user.name}</p>
      </div>
    </MainContainer>
  );
}
export async function getServerSideProps({ params }) {
  console.log(params);
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/users/${params.id}`
  );
  const user = await response.json();
  return {
    props: { user }, // will be passed to the page component as props
  };
}
