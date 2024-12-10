import React, { createElement, FC } from 'react'
import {
  Text,
  Quinas,
  Cuadras,
  Balas,
  Senas,
  Trenes,
  Tontos
} from '@/feature/Game/Modal/components/Dices/icons'
import { Hand } from '@/enum'

const classes = {
  icon: 'w-6 absolute top-0 left-0 m-0 border rounded-md',
  td: 'w-14 h-14 px-4 py-3 relative cursor-pointer',
  tdOption: 'text-yellow-500',
  tdValue: 'text-blue-500'
}

const color = '#9CA3AF'

const tableData = [
  [
    {
      name: Hand.balas,
      icon: <Balas color={color} />,
      tdClassName: 'border-r border-b',
      title: 'Balas'
    },
    {
      name: Hand.escalera,
      icon: <Text txt="E" color={color} />,
      tdClassName: 'border-r border-b',
      title: 'Escalera / Straight'
    },
    {
      name: Hand.cuadras,
      icon: <Cuadras color={color} />,
      tdClassName: 'border-b',
      title: 'Cuadras'
    }
  ],
  [
    {
      name: Hand.tontos,
      icon: <Tontos color={color} />,
      tdClassName: 'border-r border-b',
      title: 'Tontos'
    },
    {
      name: Hand.full,
      icon: <Text txt="F" color={color} />,
      tdClassName: 'border-r border-b',
      title: 'Full / Full House'
    },
    {
      name: Hand.quinas,
      icon: <Quinas color={color} />,
      tdClassName: 'border-b',
      title: 'Quinas'
    }
  ],
  [
    {
      name: Hand.trenes,
      icon: <Trenes color={color} />,
      tdClassName: 'border-r border-b',
      title: 'Trenes'
    },
    {
      name: Hand.poker,
      icon: <Text txt="P" color={color} />,
      tdClassName: 'border-r border-b',
      title: 'Poker / Four of a kind'
    },
    {
      name: Hand.senas,
      icon: <Senas color={color} />,
      tdClassName: 'border-b',
      title: 'Senas'
    }
  ],
  [
    null,
    {
      name: Hand.grande,
      icon: <Text txt="G" color={color} />,
      tdClassName: 'border-r border-l',
      title: 'Grande / Five of a kind'
    },
    null
  ]
]

type Props = {
  name: string
  active: boolean
  //TODO: Temporary "undefined"
  options?: Record<Hand, number>
  //TODO: Temporary "undefined"
  values?: Record<Hand, number>
}

const ScoreChart: FC<Props> = ({ name, active, options, values }) => (
  <div className="w-full">
    <table className="mx-auto">
      <tbody>
        {tableData.map((row, i) => (
          <tr key={i}>
            {row.map((cell, j) => {
              if (!cell) return <td key={`${i}-${j}`} />
              //TODO: Temporary "undefined"
              const value = values?.[cell.name]
              //TODO: Temporary "undefined"
              const option = options?.[cell.name] || ''

              return (
                <td
                  key={`${i}-${j}`}
                  className={
                    cell.tdClassName +
                    ' ' +
                    classes.td +
                    ' ' +
                    (active ? 'border-blue-400' : ' border-gray-400')
                  }
                  title={cell.title}
                >
                  {createElement(cell.icon.type, {
                    ...cell.icon.props,
                    className: classes.icon
                  })}
                  <span className={value ? classes.tdValue : classes.tdOption}>
                    {value ? value : option}
                  </span>
                </td>
              )
            })}
          </tr>
        ))}
      </tbody>
    </table>

    <section className={`mt-4 flex justify-center ${active ? 'text-blue-500' : ''}`}>
      {name}
    </section>
  </div>
)

export default ScoreChart
