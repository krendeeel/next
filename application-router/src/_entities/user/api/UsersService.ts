import { IUser } from '@/_entities/user/model/IUser';

export const UsersService = {
  USERS_TAG: 'USERS_TAG',
  fetchUsers: async (): Promise<IUser[]> => {
    const response = await fetch(
      `${process.env.BASE_URL}/users`,
      { method: 'GET' },
      // cache: "no-store", //SSR - getServerSideProps
      // cache: "force-catch", //SSG - getStaticProps
      // revalidate: 10, //IRS - getStaticProps and revalidate
      // }
    );

    return response.json();
  },
  createUser: async ({ name }: { name: string }) => {
    const id = Date.now().toString();

    await fetch(`${process.env.BASE_URL}/users`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ id, name }),
    });
  },
  deleteUser: async (id: string) => {
    await fetch(`${process.env.BASE_URL}/users/${id}`, {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' },
    });
  },
};
