import { type SchemaTypeDefinition } from 'sanity'
import { carTypes } from './car'
import { brandType } from './brand'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [carTypes, brandType],
}
