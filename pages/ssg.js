import { useState } from "react";
import {Page} from '../components/Page';
import { getUsers } from "./api/users";

export default function Home({ initialUsers }) {
  const [users] = useState(initialUsers);
  
  return <Page users={users} />;
}

// ISR 
export async function getStaticProps() {
  const users = await getUsers();
  return { props: { initialUsers: users }, revalidate: 10 };
}






