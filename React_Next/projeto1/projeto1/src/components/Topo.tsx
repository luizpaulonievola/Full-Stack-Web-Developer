import Link from 'next/link';

export default function Topo() {
  return (
    <div className="flex h-[130px] flex-col items-center justify-between bg-zinc-300">
      <div>Logo</div>
      <div className="flex flex-col items-center justify-center">
        <div className="text-3xl">Canal</div>
        <div className="subtituloTopo">Curso de React</div>
      </div>
      <nav className="flex gap-5">
        <Link href={'/'}>Home</Link>
        <Link href={'/sobre/sobre'}>Sobre</Link>
        <Link
          href={{
            pathname: '/produtos/Produtos',
            query: {
              produto: 'produto',
              valor: 'valor',
            },
          }}
        >
          Produtos
        </Link>
        <Link href={'/teste/Testepagina'}>Teste</Link>
        <Link href={'/usestate/Usestate'}>UseState</Link>
        <Link href={'/inputs/Inputs'}>Inputs</Link>
        <Link href={'/useeffect/Useeffect'}>UseEffect</Link>
        <Link href={'/filtragem/Filtragem'}>Filtragem</Link>
      </nav>
    </div>
  );
}
