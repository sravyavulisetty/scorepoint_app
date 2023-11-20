interface MyComponentProps {
  theme: string
}
const Footer: React.FC<MyComponentProps> = ({theme}) => {
  return (
    <div className='flex flex-row items-center p-4 text-sm m-0 font-poppins font-light' data-theme={theme}>
      <p>&copy; Copyright 2023 ScoreShuffler.com</p>
      <div className='pl-10'>
        <a href='/home'>Home</a>
        <span className='pl-1'><a href='/privacy'>| Privacy Policy</a></span>
      </div>
    </div>
  )
}

export default Footer;
