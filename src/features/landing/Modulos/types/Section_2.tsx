export interface ListaItem {
  id: string;
  texto: string;
}

export interface EstadisticaItem {
  id: string;
  porcentaje: string;
  descripcion: string;
  esPositivo: boolean;
}

export interface ModulosData {
  titulo: string;
  lista: ListaItem[];
  estadisticas: EstadisticaItem[];
}