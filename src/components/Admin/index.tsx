import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '@/redux';
import { GET_ALL_USERS } from '@/constants/sagas';
import UserItem from '@/components/Admin/UserItem';

const Admin = () => {
  const dispatch = useAppDispatch();

  const users = useAppSelector((state) => state.users);

  useEffect(() => {
    dispatch({ type: GET_ALL_USERS });
  }, []);

  return (
    <div style={{ paddingLeft: 25, paddingRight: 25 }}>
      {users.map((user) => (
        <UserItem
          key={user.id}
          id={user.id}
          email={user.email}
          name={user.name}
          role={user.role}
        />
      ))}
    </div>
  );
};

export default Admin;
