
export default function TableDetail ({ attributes }: any) {
  const rows = Object.keys(attributes)
  return (
    <>
      <table>
        <thead>
          <tr>
            <th>Atributtes</th>
          </tr>
        </thead>
        <tbody>
            {
              rows.map((key: string) => (
                <tr key={key}>
                  <td>{key}: </td>
                  <td>{attributes[key]}</td>
                </tr>
              ))
            }
        </tbody>
      </table>
      <style jsx>{`
        table {
         margin: auto;
         width: 60%;
         border: 1px solid #DEDEDF;
         border-radius: 10px;
         padding: 10px;
        }
        tr {
          height: 40px;
          border: 2px solid #000000;
        }
        th {
          text-align: left;
        }
      `}</style>
    </>
  )
}
