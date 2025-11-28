import Image from 'next/image';

export default function Home() {
  return (
    <>
      <div className="relative overflow-clip">
        <section className="min-h-screen bg-white grid place-content-center">
          <h1 className="text-5xl text-black">test</h1>
        </section>
        <section className="min-h-screen bg-black grid place-content-center">
          <h1 className="text-white text-5xl">test</h1>
        </section>
        <button className="bg-amber-900 w-full text-white py-3 fixed bottom-0 left-0 font-bold grid place-content-center">
          button
        </button>
      </div>
    </>
  );
}
