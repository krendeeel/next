'use server';
import { FC } from 'react';
import { revalidatePath } from 'next/cache';
import { UsersService } from '@/_entities/user/api/UsersService';

interface IProps {
  id: string;
}

export const DeleteUser: FC<IProps> = async ({ id }) => {
  const deleteUser = async (id: string) => {
    'use server';
    await UsersService.deleteUser(id);

    revalidatePath('/users');
  };

  return (
    <form action={deleteUser.bind(null, id)}>
      <button type='submit'>delete</button>
    </form>
  );
};
