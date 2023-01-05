import { useState } from "react";
import {Page} from '../components/Page';
import { getUsers } from "./api/users";

export default function Home({ initialUsers }) {
  const [users] = useState(initialUsers);
  return <Page users={users} />;
}

// SSR - Next
export async function getServerSideProps() {
  const users = await getUsers();
  return { props: { initialUsers: users } 
  };
}




