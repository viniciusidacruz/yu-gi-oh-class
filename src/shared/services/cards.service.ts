import { BASE_URL } from "@/config";

import type { Card } from "@/shared/interfaces";

export class CardsService {
  static async getCards(): Promise<Card[]> {
    const response = await BASE_URL.get("/cardinfo.php");

    return response.data.data;
  }
}
