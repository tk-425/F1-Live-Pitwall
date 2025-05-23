import { useWebSocketContext } from '@/context/WebSocketContext';
import { drivers } from '@/info/Info_drivers';
import DriverBadge from '@/components/icons/drivers/DriverBadge';
import Unavailable from '../utils/Unavailable';
import { ActiveViewType } from '@/utils/activeViewType';
import { constructorIcons } from '@/info/utils/constructorIcons';
import { teamIconFit } from '@/style/style';
import Image from 'next/image';
import { formatInterval, formatGap } from '../../utils/util_interval';
import { useEffect, useState } from 'react';
import { Loading } from '../utils/Loading';
import { isValidArray } from '@/utils/dataUtils';
import PositionNumberIcon from '../icons/position/PositionNumberIcon';

export default function Intervals() {
  const { intervals } = useWebSocketContext();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(false);
  }, [intervals]);

  if (loading) {
    return <Loading />;
  }

  if (!isValidArray(intervals)) {
    return <Unavailable message={ActiveViewType.INTERVALS} />;
  }

  return (
    <div className='mt-6 mb-4'>
      {intervals.map((group, groupIndex) => (
        <div key={groupIndex} className='mb-6 px-2'>
          <div className='font-semibold m-2'>Group {groupIndex + 1}</div>
          <div className='space-y-4 mb-2'>
            {group.map((driver, index) => (
              <div
                key={index}
                className='flex items-center justify-center text-sm font-mono mx-6'
              >
                {/* Position */}
                <PositionNumberIcon position={driver.position} />

                {/* Constructor Icon */}
                <Image
                  src={constructorIcons[drivers[driver.driver_number].constructor]}
                  width={26}
                  height={26}
                  className={`${teamIconFit} mx-4`}
                  alt={drivers[driver.driver_number].constructor || 'constructor-logo'}
                />

                {/* Driver Badge */}
                <DriverBadge
                  className='mx-2'
                  initial={driver.initial}
                  driverNumber={driver.driver_number}
                  teamColor={drivers[driver.driver_number].teamColor}
                  height={32}
                />

                {/* Interval Display */}
                <div className='flex flex-row'>
                  <span className='ml-4 mr-2 font-bold'>Interval:</span>
                  <span className='mr-2 w-[5ch] text-right inline-block'>
                    {formatInterval(driver.interval, driver.gap_to_leader)}
                  </span>
                </div>

                {/* Gap Display */}
                <div className='hidden md:block'>
                  <span className='ml-4 mr-2 font-bold'>Gap:</span>
                  <span className='w-[6ch] text-right inline-block'>
                    {formatGap(driver.gap_to_leader, driver.interval)}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
