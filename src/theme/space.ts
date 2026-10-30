import tokens from '../tokens/spacing'
import { pxMap, tokenMap } from './utils'

export const spacing = {
  ...pxMap([0, 2, 4, 8, 12, 16, 20, 28, 40, 60, 80, 96]),
  ...tokenMap(tokens),
  fit: 'fit-content'
}
