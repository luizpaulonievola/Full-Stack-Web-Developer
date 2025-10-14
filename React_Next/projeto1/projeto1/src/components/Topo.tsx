import Link from 'next/link';

export default function Topo() {
  return (
    <div className="flex flex-col justify-between items-center bg-zinc-300 h-[130px]">
      <div>Logo</div>
      <div className="flex flex-col justify-center items-center">
        <div className="text-3xl">Canal</div>
        <div className="subtituloTopo">Curso de React</div>
      </div>
      <nav className="flex gap-5">
        <Link href={'/'}>Home</Link>
        <Link href={'/sobre/sobre'}>Sobre</Link>
        <Link
          href={{
            pathname: '/produtos/produtos',
            query: {
              produto: 'produto',
              valor: 'valor',
            },
          }}
        >
          Produtos
        </Link>
        <Link href={'/teste/testepagina'}>Teste</Link>
        <Link href={'/usestate/usestate'}>useState</Link>
      </nav>
    </div>
  );
}
