// board has only name and description, background from orange-500 to teal-800

import Link from 'next/link';

const BoardCard = ({ board }) => {
  return (
    <>
      <Link href={`/board/${board.id}`} className="flex flex-col bg-gradient-to-br from-orange-500 to-indigo-500 rounded-md p-4 cursor-pointer">
        <h3 className="text-2xl font-semibold text-white">{board.name}</h3>
        <p className="text-white">{board.description}</p>
      </Link>
    </>
  );
};

export default BoardCard;
