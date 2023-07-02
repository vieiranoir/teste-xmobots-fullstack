class Aerodrome {
  name: string;
  city: string;
  description: string;
  createdAt: Date;
  runways: Runway[];

  constructor(
    name: string,
    city: string,
    description: string,
    createdAt: Date,
    runways: Runway[]
  ) {
    this.name = name;
    this.city = city;
    this.description = description;
    this.createdAt = createdAt;
    this.runways = runways;
  }
}

class Runway {
  designation: string;
  width: number;
  length: number;

  constructor(designation: string, width: number, length: number) {
    this.designation = designation;
    this.width = width;
    this.length = length;
  }
}
