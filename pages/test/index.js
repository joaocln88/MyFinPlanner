export default function test() {
  return (
    <main className="bg-lime-950 p-8">
      <p className="text-center text-sm uppercase tracking-widest text-lime-300">
        conecte-se com a natureza
      </p>

      <h2 className="mx-auto mt-4 max-w-3xl text-center font-serif text-6xl capitalize text-white">
        Cada som, cada momento, uma nova descoberta
      </h2>

      <div className="mt-8 grid grid-cols-2 items-center justify-center gap-8 text-lime-300">
        <div className="rounded-xl bg-lime-800 p-4">
          <h3 className="font-serif text-2xl">Lua Nova</h3>
          <div className="my-4 text-white">
            <p className="text-5xl">23</p>
            <p>Março 2049</p>
          </div>
          <p className="text-balance">
            Melhor período para observação astronômica. O céu estará claro e as
            estrelas visível
          </p>
        </div>
        <div className="rounded-xl bg-lime-800 p-4">
          <h3 className="font-serif text-2xl">Aurora Boreal</h3>
          <div className="my-4 text-white">
            <p className="text-5xl">15</p>
            <p>Abril 2049</p>
          </div>
        </div>
      </div>
    </main>
  );
}
