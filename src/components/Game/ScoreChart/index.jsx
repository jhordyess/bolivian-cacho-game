import React from 'react'
import { Text, Quinas, Cuadras, Balas, Senas, Trenes, Tontos } from '@/components/Icons'

const classes = {
  icon: 'w-6 absolute top-0 left-0 m-0 border rounded-md',
  td: 'w-14 h-14 px-4 py-3 relative cursor-pointer border border-gray-400 hover:bg-gray-100 rounded-md'
}

const color = '#9CA3AF'

const tableData = [
  [
    {
      name: 'balas',
      icon: <Balas color={color} />,
      tdClassName: '',
      title: 'Balas'
    },
    {
      name: 'escalera',
      icon: <Text txt="E" color={color} />,
      tdClassName: '',
      title: 'Escalera / Straight'
    },
    {
      name: 'cuadras',
      icon: <Cuadras color={color} />,
      tdClassName: '',
      title: 'Cuadras'
    }
  ],
  [
    {
      name: 'tontos',
      icon: <Tontos color={color} />,
      tdClassName: '',
      title: 'Tontos'
    },
    {
      name: 'full',
      icon: <Text txt="F" color={color} />,
      tdClassName: '',
      title: 'Full / Full House'
    },
    {
      name: 'quinas',
      icon: <Quinas color={color} />,
      tdClassName: '',
      title: 'Quinas'
    }
  ],
  [
    {
      name: 'trenes',
      icon: <Trenes color={color} />,
      tdClassName: '',
      title: 'Trenes'
    },
    {
      name: 'poker',
      icon: <Text txt="P" color={color} />,
      tdClassName: '',
      title: 'Poker / Four of a kind'
    },
    {
      name: 'senas',
      icon: <Senas color={color} />,
      tdClassName: '',
      title: 'Senas'
    }
  ],
  [
    null,
    {
      name: 'grande',
      icon: <Text txt="G" color={color} />,
      tdClassName: '',
      title: 'Grande / Five of a kind'
    },
    null
  ]
]

const ScoreChart = () => (
  <div className="w-full">
    <table className="mx-auto border-separate border-spacing-2">
      <tbody>
        {tableData.map((row, i) => (
          <tr key={i}>
            {row.map((cell, j) =>
              cell ? (
                <td
                  key={`${i}-${j}`}
                  className={cell.tdClassName + ' ' + classes.td}
                  title={cell.title}
                >
                  {React.cloneElement(cell.icon, {
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
  </div>
)

export default ScoreChart
