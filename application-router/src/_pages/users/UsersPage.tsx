'use server';
import { FC } from 'react';
import { UsersList } from '@/_widgets/users/usersList/UsersList';
import { CreateUser } from '@/_features/users/createUser/CreateUser';

export const UsersPage: FC = async () => {
  return (
    <>
      <h2>Users</h2>
      <UsersList />
      <hr />
      <CreateUser />
    </>
  );
};
