export const Loading = ({ type }) => {
  return (
    <div className='text-center text-gray-500 mt-8 mb-6'>
      {`🔄 Loading ${type}...`}
    </div>
  );
};
