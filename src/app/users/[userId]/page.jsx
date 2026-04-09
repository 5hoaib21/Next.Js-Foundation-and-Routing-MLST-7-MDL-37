import React from 'react';

const UsersDetailPage = async({params}) => {
  const {userId} = await params;
  const res = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);
  const user = await res.json();
  
  console.log('show me userId no:',userId);
  return (
    <div>
      <p>{user.email}</p>
      <p>{user.phone}</p>
    </div>
  );
};

export default UsersDetailPage;