export const status = {
  idle: 'idle',
  rolling: 'rolling',
  selecting: 'selecting'
}

export const Status = ({ state = 'idle' }) => {
  return <h1>{state}</h1>
}
