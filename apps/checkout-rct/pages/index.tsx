import { Content, Logo } from '@ui';

export function Index() {
  /*
   * Replace the elements below with your own.
   *
   * Note: The corresponding styles are in the ./index.css file.
   */
  return (
    <div className="flex justify-center items-center mx-40 mt-20">
      <div className="w-[964px]">
        <Logo />
        <Content />
      </div>
    </div>
  );
}

export default Index;
