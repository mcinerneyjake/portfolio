import Button from './sharedUI/Button.tsx';

const Nav = () => (
  <div className='flex items-center justify-center gap-4 h-32 w-96 bg-slate-500'>
    <Button
      onPress={() => console.log('Projects')}
    >
      Projects
    </Button>
    <Button
      onPress={() => console.log('Toy Projects')}
    >
      Toy Projects
    </Button>
    <Button
      onPress={() => console.log('Contact')}
    >
      Contact
    </Button>
  </div>
);

export default Nav;
