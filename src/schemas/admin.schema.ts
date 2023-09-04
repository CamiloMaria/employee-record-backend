import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type AdminDocument = Admin & Document;

@Schema()
export class Admin {
  @Prop()
  username: string;

  @Prop()
  password: string;

  @Prop({
    type: String,
    enum: ['admin', 'subAdmin'],
    default: 'subAdmin',
  })
  role: string;

  @Prop()
  created_at: Date;
}

export const AdminSchema = SchemaFactory.createForClass(Admin);
