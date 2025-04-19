import Image from 'next/image';
import { useWebSocketContext } from '@/context/WebSocketContext';
import DriverRadioPlayer from './DriverRadioPlayer';
import { combineTeamRadiosByConstructor } from '@/utils/flattenRadioTracks';
import { constructorIcons } from '@/info/utils/constructorIcons';
import { teamIconFit } from '@/style/style';
import Unavailable from '../utils/Unavailable';
import { ActiveViewType } from '@/utils/activeViewType';
import { useEffect, useState } from 'react';
import { isValidArray } from '@/utils/dataUtils';
import { Loading } from '../utils/Loading';

export default function TeamRadioPlayer() {
  const { teamRadio } = useWebSocketContext();
  const teamRadioByConstructor = combineTeamRadiosByConstructor(teamRadio);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(false);
  }, [teamRadio]);

  if (loading) {
    return <Loading />;
  }

  if (!isValidArray(teamRadio)) {
    return <Unavailable message={ActiveViewType.TEAM_RADIO} />;
  }

  return (
    <div className='mt-6 mb-4'>
      {Object.keys(teamRadioByConstructor).map((constructor) => (
        <div key={constructor}>
          {/* Title */}
          <div className='flex items-center font-bold text-base md:text-lg mb-2 px-4'>
            <Image
              src={constructorIcons[constructor]}
              width={22}
              height={22}
              className={`${teamIconFit} w-6 h-6 md:w-8 md:h-8 mr-2`}
              alt={`${constructor} || 'constructor-logo'`}
            />
            <span className='truncate'>{constructor}</span>
          </div>

          {/* Radios */}
          <div className='mb-6'>
            {Object.values(teamRadioByConstructor[constructor]).map(
              (driver) => (
                <DriverRadioPlayer
                  key={driver.driver_number}
                  driverNumber={driver.driver_number}
                  radios={driver.radios}
                />
              )
            )}
          </div>
        </div>
      ))}
    </div>
  );
}
