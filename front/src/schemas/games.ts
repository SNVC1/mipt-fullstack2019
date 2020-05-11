import {normalize, schema} from 'normalizr'

const gameSchema = new schema.Entity('game')

export function gamesNormalize(games: IGamePreview[]) {
  return normalize(games, [gameSchema])
}

export function gameNormalize(game: IGamePreview) {
  return normalize(game, gameSchema)
}