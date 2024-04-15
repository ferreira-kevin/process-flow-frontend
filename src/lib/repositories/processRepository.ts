import { Process } from "../../domain/model/process";

export class ProcessRepository {
    async getProcessThree(): Promise<Process[]> {
        const mockProcess1: Process = {
            id: "1",
            title: "Processo 1",
            description: "Descrição do processo 1",
            tags: ["Tag1", "Tag2"],
            link: "https://example.com/process1"
          };
          
          const mockProcess2: Process = {
            id: "2",
            title: "Processo 2",
            description: "Descrição do processo 2",
            tags: ["Tag3", "Tag4"],
            link: "https://example.com/process2"
          };
          
          const mockProcess3: Process = {
            id: "3",
            title: "Processo 3",
            description: "Descrição do processo 3",
            tags: ["Tag5", "Tag6"],
            link: "https://example.com/process3"
          };
          
        return [
            mockProcess1,
            mockProcess2,
            mockProcess3
        ] as Process[];
    }

    async createProcessThree(process: Process[]) {

    }

    async updateProcessThree(process: Process[]) {

    }

    async deleteProcessThree(process: Process[]) {

    }
}