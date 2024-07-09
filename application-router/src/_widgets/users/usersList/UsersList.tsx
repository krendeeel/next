'use server';
import { User } from '@/_entities/user/ui/User';
import { UsersService } from '@/_entities/user/api/UsersService';
import { DeleteUser } from '@/_features/users/deleteUser/DeleteUser';

export const UsersList = async () => {
  const users = await UsersService.fetchUsers();

  return (
    <ul>
      {users.map((user) => (
        <li key={user.id}>
          <User user={user} actions={<DeleteUser id={user.id} />} />
        </li>
      ))}
    </ul>
  );
};
