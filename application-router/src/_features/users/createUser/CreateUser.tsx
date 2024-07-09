'use server';
import { revalidatePath } from 'next/cache';
import { UsersService } from '@/_entities/user/api/UsersService';

export const CreateUser = async () => {
  const createUser = async (formData: FormData): Promise<void> => {
    'use server';
    const name = formData.get('name');

    if (typeof name !== 'string') {
      throw TypeError('Name is not assignable to type string!');
    }

    await UsersService.createUser({ name });

    revalidatePath('/users');
  };

  return (
    <div>
      <h3>Create User</h3>
      <form action={createUser}>
        <input placeholder='username' name={'name'} required />
        <button type='submit'>create user</button>
      </form>
    </div>
  );
};
