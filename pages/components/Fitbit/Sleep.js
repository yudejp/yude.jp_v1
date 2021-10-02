// Data fetching
import useSwr from 'swr'

// Font Awesome
import { faBed } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

// Data fetching implements
const fetcher = (url) => fetch(url).then((res) => res.json())

function App (props) {
  const { data, error } = useSwr(
    '/api/Fitbit/Sleep',
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
        const duration = data.duration
        const hours = Math.floor(duration / 60)
        let minutes = duration % 60
        if (minutes <= 9) {
            minutes = '0' + minutes
        }
        return (
            <>
                <FontAwesomeIcon icon={faBed} className="w-5 h-5 inline"/>
                &nbsp;
                {hours}:{minutes}
            </>
        )
    }
  }
}

export default App;