// Data fetching
import useSwr from 'swr'

// Font Awesome
import { faHeartbeat } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

// Data fetching implements
const fetcher = (url) => fetch(url).then((res) => res.json())

function App (props) {
  const { data, error } = useSwr(
    '/api/Fitbit/Heartrate',
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
                <FontAwesomeIcon icon={faHeartbeat} className="w-5 h-5 inline ml-3"/>
                &nbsp;
                {data.heartrate.value}
            </>
        )
    }
  }
}

export default App;