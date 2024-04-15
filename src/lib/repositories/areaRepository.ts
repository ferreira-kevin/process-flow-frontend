import { Area } from "../../domain/model/area";

export class AreaRepository {
    async getArea() : Promise<Area> {
        const area: Area = {
            id: "1",
            name: "Nome da Área"
          };
        return area as Area;
    }

    async createArea(area: Area) {

    }

    async updateArea(area: Area) {

    }

    async deleteArea(area: Area) {

    }
}