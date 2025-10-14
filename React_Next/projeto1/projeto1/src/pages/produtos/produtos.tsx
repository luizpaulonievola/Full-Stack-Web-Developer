import Card from '@/components/Card';
import products from '@/data/products.json';
import { useRouter } from 'next/router';
import { Product } from '@/types/Product';
import { useEffect } from 'react';

function desconto(v: number, d: number) {
  return (v - (v * d) / 100).toFixed(2);
}

export default function produtos() {
  const router = useRouter();

  useEffect(() => {
    if (router.isReady) {
      const { produto, valor } = router.query;
      console.log(`Query parameter 'produto':`, produto);
      console.log(`Query parameter 'valor':`, valor);
    }
  }, [router.isReady, router.query]);

  return (
    <div>
      <div className="flex justify-center gap-3">
        {products.map((e: Product) => {
          if (e.disponivel) {
            return (
              <Card
                key={e.id}
                produto={e.produto}
                valor={e.valor}
                desconto={e.desconto}
                funcao={desconto}
              >
                <div>Teste Filho de Card</div>
                <div>Teste Filho de Card 2</div>
              </Card>
            );
          }
        })}
      </div>
    </div>
  );
}
