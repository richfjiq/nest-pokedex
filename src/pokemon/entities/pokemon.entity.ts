import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Pokemon extends Document {
  @Prop({
    unique: true,
    index: true,
  })
  @Prop({
    unique: true,
    index: true,
  })
  name: string;
  no: number;
}

export const PokemonSchema = SchemaFactory.createForClass(Pokemon);
