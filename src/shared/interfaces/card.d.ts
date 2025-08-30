export interface Card {
  id: number;
  name: string;
  type: string;
  desc: string;
  race: string;
  archetype?: string;
  atk?: number;
  def?: number;
  level?: number;
  attribute?: string;
  scale?: number;
  linkval?: number;
  linkmarkers?: string[];
  card_images: CardImage[];
  card_prices: CardPrice[];
  card_sets?: CardSet[];
  humanReadableCardType?: string;
}

export interface CardImage {
  id: number;
  image_url: string;
  image_url_small: string;
  image_url_cropped: string;
}

export interface CardPrice {
  amazon_price: string;
  cardmarket_price: string;
  coolstuffinc_price: string;
  ebay_price: string;
  tcgplayer_price: string;
}

export interface CardSet {
  set_code: string;
  set_name: string;
  set_price: string;
  set_rarity: string;
  set_rarity_code: string;
}
