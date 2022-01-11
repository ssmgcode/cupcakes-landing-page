// To parse this data:
//
//   import { Convert } from "./file";
//
//   const cupcakes = Convert.toCupcakes(json);

export interface Cupcake {
  id: string
  flavor: string
  color: string
  description: string
  price: number
  picturePath: string
}

// Converts JSON strings to/from your types
export class Convert {
  public static toCupcakes(json: string): Cupcake[] {
    return JSON.parse(json)
  }

  public static cupcakesToJson(value: Cupcake[]): string {
    return JSON.stringify(value)
  }
}
