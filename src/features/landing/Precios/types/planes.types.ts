export interface PlanCaracteristica {
  id: string;
  texto: string;
  incluido: boolean;
}

export interface Plan {
  id: string;
  nombre: string;
  descripcion: string;
  precio: string;
  precioDetalle?: string;
  caracteristicas: PlanCaracteristica[];
  destacado?: boolean;
}

export interface PreciosData {
  titulo: string;
  subtitulo: string;
  planes: Plan[];
}