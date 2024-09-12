interface IProps {
  text: string;
}

export const Error = ({ text }: IProps) => {
  return (
    <div className='w-full flex justify-center items-center my-4 p-10 bg-gradient-to-r from-red-200 via-red-100 to-red-200 rounded-lg'>
      <p className='text-3xl'>{text}</p>
    </div>
  );
};
