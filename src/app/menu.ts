// Menu class definition, derived from Mongo backend schema

import { Section } from './section';

export class Menu {
  name: string;
  sections: Array<Section>;
}
