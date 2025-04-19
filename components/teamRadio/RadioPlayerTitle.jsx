import DriverBadge from '@/components/icons/drivers/DriverBadge';

export default function RadioPlayerTitle({
  initial,
  driverNumber,
  height,
  teamColor,
  currentTrack,
  trackCount,
  showDot,
}) {
  return (
    <div className='flex items-center font-bold mb-4'>
      <DriverBadge
        initial={initial}
        driverNumber={driverNumber}
        height={height}
        teamColor={teamColor}
      />

      <span className='mx-2 text-base md:text-lg'>{currentTrack}</span>

      <span
        className={`mx-2 text-xs md:text-sm px-2 py-1 rounded transition-colors duration-200 ${
          showDot ? 'text-red-500' : 'text-gray-600'
        }`}
      >
        {trackCount} Team Radio
      </span>
    </div>
  );
}
