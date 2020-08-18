import { Mongo } from 'meteor/mongo';

export interface Outfit {
  _id?: string;
  size: string;
  name: string;
  price: number;
  boughtBy: string | null;
  createdAt: Date;
}

export const OutfitCollection = new Mongo.Collection<Outfit>('outfits');
