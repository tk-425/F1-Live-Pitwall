import { brightRed, lightBlue, white } from '@/style/style';

export default function PositionNumberIcon({
  className,
  position,
  width = 36,
  height = 36,
}) {
  return (
    <svg
      className={className}
      width={width}
      height={height}
      viewBox={`0 0 ${width} ${height}`}
      xmlns='http://www.w3.org/2000/svg'
    >
      <rect
        x='0'
        y='0'
        width={width}
        height={height}
        rx='8'
        ry='8'
        fill={position > 3 ? lightBlue : brightRed}
      />
      <text
        x='50%'
        y='50%'
        textAnchor='middle'
        dominantBaseline='middle'
        fontSize='18'
        fill={white}
        fontWeight='bold'
      >
        {position}
      </text>
    </svg>
  );
}
