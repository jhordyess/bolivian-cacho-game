export enum status {
  idle = 'idle',
  rolling = 'rolling',
  selecting = 'selecting'
}

export const Status = ({ state = status.idle }: { state: status }) => {
  return <h1>{state}</h1>
}
