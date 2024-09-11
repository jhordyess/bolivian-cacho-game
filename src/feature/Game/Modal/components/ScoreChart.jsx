import React, { createElement } from 'react'
import {
  Text,
  Quinas,
  Cuadras,
  Balas,
  Senas,
  Trenes,
  Tontos
} from '@/feature/Game/Modal/components/Dices/icons'

const classes = {
  icon: 'w-6 absolute top-0 left-0 m-0 border rounded-md hidden',
  td: 'w-14 h-14 px-4 py-3 relative cursor-pointer border-gray-400'
}

const color = '#9CA3AF'

const tableData = [
  [
    {
      name: 'balas',
      icon: <Balas color={color} />,
      tdClassName: 'border-r border-b',
      title: 'Balas'
    },
    {
      name: 'escalera',
      icon: <Text txt="E" color={color} />,
      tdClassName: 'border-r border-b',
      title: 'Escalera / Straight'
    },
    {
      name: 'cuadras',
      icon: <Cuadras color={color} />,
      tdClassName: 'border-b',
      title: 'Cuadras'
    }
  ],
  [
    {
      name: 'tontos',
      icon: <Tontos color={color} />,
      tdClassName: 'border-r border-b',
      title: 'Tontos'
    },
    {
      name: 'full',
      icon: <Text txt="F" color={color} />,
      tdClassName: 'border-r border-b',
      title: 'Full / Full House'
    },
    {
      name: 'quinas',
      icon: <Quinas color={color} />,
      tdClassName: 'border-b',
      title: 'Quinas'
    }
  ],
  [
    {
      name: 'trenes',
      icon: <Trenes color={color} />,
      tdClassName: 'border-r border-b',
      title: 'Trenes'
    },
    {
      name: 'poker',
      icon: <Text txt="P" color={color} />,
      tdClassName: 'border-r border-b',
      title: 'Poker / Four of a kind'
    },
    {
      name: 'senas',
      icon: <Senas color={color} />,
      tdClassName: 'border-b',
      title: 'Senas'
    }
  ],
  [
    null,
    {
      name: 'grande',
      icon: <Text txt="G" color={color} />,
      tdClassName: 'border-r border-l',
      title: 'Grande / Five of a kind'
    },
    null
  ]
]

const ScoreChart = ({ name, active }) => (
  <div className="w-full">
    <table className="mx-auto">
      <tbody>
        {tableData.map((row, i) => (
          <tr key={i}>
            {row.map((cell, j) =>
              cell ? (
                <td
                  key={`${i}-${j}`}
                  className={
                    cell.tdClassName + ' ' + classes.td + ' ' + (active ? 'border-blue-500' : '')
                  }
                  title={cell.title}
                >
                  {createElement(cell.icon.type, {
                    ...cell.icon.props,
                    className: classes.icon
                  })}
                </td>
              ) : (
                <td key={`${i}-${j}`} />
              )
            )}
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
