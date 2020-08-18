import { Mongo } from 'meteor/mongo';

export interface Size {
  _id?: string;
  label: string;
  createdAt: Date;
}

export const SizesCollection = new Mongo.Collection<Size>('sizes');
