import React from 'react';
import { GamePageArgs } from '@/app/types';
import { EditGame } from '@/components/HandballComponenets/GameEditingComponenets/EditGame';

export default async function GamesPage({ params }: GamePageArgs) {
  const game = Number((await params).game);
  return <EditGame game={Number(game)}></EditGame>;
}
