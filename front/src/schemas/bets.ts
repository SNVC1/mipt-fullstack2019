import {normalize, schema} from 'normalizr'

const betSchema = new schema.Entity('bet')

export function betsNormalize(bets: IBet[]) {
  return normalize(bets, [betSchema])
}

export function betNormalize(bet: IBet) {
  return normalize(bet, betSchema)
}