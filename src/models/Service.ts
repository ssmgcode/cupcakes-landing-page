export interface Service {
  id: string
  name: string
  description: string
}

// Converts JSON strings to/from your types
export class Convert {
  public static toServices(json: string): Service[] {
    return JSON.parse(json)
  }

  public static servicesToJson(value: Service[]): string {
    return JSON.stringify(value)
  }
}
