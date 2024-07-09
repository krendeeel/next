import { IUser } from '@/_entities/user/model/IUser';
import { FC, ReactNode } from 'react';

interface IProps {
  user: IUser;
  actions?: ReactNode;
}

export const User: FC<IProps> = ({ user, actions }) => {
  return (
    <section>
      <div>{user.name}</div>
      <div>{actions}</div>
    </section>
  );
};
