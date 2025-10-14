import { useState } from 'react';
import DisplayState from '@/components/DisplayState';

export default function usestate() {
  const [cont, setCont] = useState<number>(0);

  return (
    <div>
      useState
      <DisplayState valor={cont} fvalor={setCont}></DisplayState>
    </div>
  );
}
