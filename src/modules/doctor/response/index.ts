import { Department } from "../../department/models";

export interface DoctorResponse {
    id: number;
    fio: string;
    specialization: string;
    department: Department;
}