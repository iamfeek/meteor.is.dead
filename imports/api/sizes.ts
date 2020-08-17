import { Mongo } from 'meteor/mongo';

export interface Size {
  _id?: string;
  label: string;
  createdAt: Date;
}

export const LinksCollection = new Mongo.Collection<Size>('sizes');
