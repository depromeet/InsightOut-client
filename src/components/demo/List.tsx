'use client';

import { useQuery } from '@tanstack/react-query';
import Card from './Card';

type Props = {
  id: number;
  userId: number;
  title: string;
  completed: boolean;
};

const List = () => {
  const { data: todos } = useQuery(['demo'], () =>
    fetch('https://jsonplaceholder.typicode.com/todos').then((response) => response.json())
  );

  return (
    <div>
      <h1>리스트</h1>
      {todos.map(({ id, userId, title, completed }: Props) => (
        <Card key={id} userId={userId} title={title} completed={completed} />
      ))}
    </div>
  );
};

export default List;
