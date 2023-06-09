import React from "react";
import Link from "next/link";
import MainContainer from "../components/MainContainer";

const Users = ({ users }) => {
  return (
    <MainContainer>
      <h1>Список пользователей</h1>
      <ul>
        {users.map((user) => (
          <li>
            <Link href={`users/${user.id}`}>{user.name}</Link>
          </li>
        ))}
      </ul>
    </MainContainer>
  );
};
export default Users;
export async function getStaticProps(context) {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const users = await response.json();
  return {
    props: { users }, // will be passed to the page component as props
  };
}
