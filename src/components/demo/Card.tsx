type Props = {
  userId: number;
  title: string;
  completed: boolean;
};

const Card = ({ userId, title, completed }: Props) => {
  return (
    <div>
      <h2>
        {title} - {userId}
      </h2>
      <input type="checkbox" checked={completed} />
    </div>
  );
};

export default Card;
