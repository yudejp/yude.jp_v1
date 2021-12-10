// Component
import Group from './Group';

// Data fetching
import useSwr from 'swr'

const fetcher = (url) => fetch(url).then((res) => res.json())

function App (props) {
  const uuid = props;
  const { data, error } = useSwr(
    uuid.uuid ? `https://api.ashcon.app/mojang/v2/user/${uuid.uuid}` : null,
    fetcher
  )
  
  if (error) {
    return (
      <>エラーが発生しました。</>
    )
  } else {
    if (!data) {
      return (
        <>読み込み中...</>
      )
    } else {
        return (
          <>
            <div className='has-tooltip'>
              <span className='tooltip rounded shadow-lg p-1 bg-gray-100 text-red-500 -mt-8 font-mono text-sm'>UUID: {uuid.uuid}</span>
              <p className="text-2xl inline">{data.username}</p>
              <Group uuid={uuid.uuid} />
            </div>
          </>
        )
    }
  }
}

export default App;