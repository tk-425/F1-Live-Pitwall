import Link from 'next/link';

export default function Footer() {
  return (
    <div className='px-4 mb-4'>
      <div className='text-center mt-2 text-xs/4 text-gray-500'>
        <p className='mb-3'>
          <Link
            className='text-blue-600 mr-1'
            href='https://github.com/tk-425/F1-Live-Pitwall-WebSocket'
            rel='noopener noreferrer'
          
            target='_blank'
          >
            Github
          </Link>
          Version: 0.0.4
        </p>
        <p>
          This project/website is unofficial and is not associated in any way
          with the Formula 1 companies.
        </p>
        <p>
          F1, Formula One, Formula 1, FIA Formula One World Championship, Grand
          Prix and related marks are trade marks of Formula One Licensing B.V.
        </p>
      </div>
    </div>
  );
}
