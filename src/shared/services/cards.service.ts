import { BASE_URL } from "@/config";

import type { Card } from "@/shared/interfaces";

export interface Meta {
  generated: string;
  current_rows: number;
  total_rows: number;
  rows_remaining: number;
  total_pages: number;
  pages_remaining: number;
  previous_page: string;
  previous_page_offset: number;
  next_page: string;
  next_page_offset: number;
}

export interface CardsResponse {
  data: Card[];
  meta: Meta;
}

export class CardsService {
  static async getCards(
    offset?: string | null,
    num?: string | null,
    attribute?: string | null,
    type?: string | null,
    name?: string | null
  ): Promise<CardsResponse> {
    const params = new URLSearchParams();

    if (offset) params.append("offset", offset);

    if (num) params.append("num", num);

    if (name) params.append("name", name);

    if (attribute) params.append("attribute", attribute);

    if (type) params.append("type", type);

    const response = await BASE_URL.get(`/cardinfo.php?${params.toString()}`);

    return response.data;
  }
}
