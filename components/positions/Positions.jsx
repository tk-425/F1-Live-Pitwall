import { useWebSocketContext } from '@/context/WebSocketContext';
import Unavailable from '../utils/Unavailable';
import { ActiveViewType } from '@/utils/activeViewType';
import Position1stRow from './Position1stRow';
import Position2ndRow from './Position2ndRow';
import { useEffect, useState } from 'react';
import { isValidArray } from '@/utils/dataUtils';
import { Loading } from '../utils/Loading';

export default function Positions() {
  const { positions } = useWebSocketContext();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(false);
  }, [positions]);

  if (loading) {
    return <Loading />;
  }

  console.log('POSITION', positions);

  if (!isValidArray(positions)) {
    return <Unavailable message={ActiveViewType.POSITIONS} />;
  }

  // if (!positions || positions.length === 0) {
  //   return <Unavailable message={ActiveViewType.POSITIONS} />;
  // }


  const leftColumn = positions.slice(0, 10);
  const rightColumn = positions.slice(10, 20);

  const renderColumn = (column, startIndex) => (
    <div className='flex flex-col gap-4'>
      {column.map((position, i) => (
        <div
          className='flex flex-col font-mono'
          key={i}
        >
          <Position1stRow
            position={position}
            startIndex={startIndex}
            index={i}
          />

          {/* Pit number & Current tire compound */}
          <Position2ndRow position={position} />
        </div>
      ))}
    </div>
  );

  return (
    <div className='mt-6 mb-4 flex justify-center gap-8'>
      {renderColumn(leftColumn, 0)}
      {renderColumn(rightColumn, 10)}
    </div>
  );
}
