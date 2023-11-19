import Label from './sharedUI/Label/Label.tsx';

const Header = () => (
  <div className='flex flex-col gap-4'>
    <Label className='text-5xl font-bold' content='Jake McInerney' />
    <Label className='text-2xl' content='_________________________________' />
    <Label className='text-3xl font-bold' content='Software Developer' />
  </div>
);

export default Header;
