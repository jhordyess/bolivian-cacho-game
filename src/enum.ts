export enum Hand {
  balas = 'balas',
  tontos = 'tontos',
  trenes = 'trenes',
  cuadras = 'cuadras',
  quinas = 'quinas',
  senas = 'senas',
  escalera = 'escalera',
  full = 'full',
  poker = 'poker',
  grande = 'grande'
}

export type HandDices =
  | Hand.balas
  | Hand.tontos
  | Hand.trenes
  | Hand.cuadras
  | Hand.quinas
  | Hand.senas
