export interface CrecimientoPunto {
  id: string;
  texto: string;
}

export interface CrecimientoData {
  titulo: string;
  puntos: CrecimientoPunto[];
  imagen: {
    src: string;
    alt: string;
  };
}