import TableLesson from '../../components/common/Table/TableLesson'
import LayoutComponent from '../../components/common/Layout'

export default function UserComponent() {
  return(
    <LayoutComponent chidren={<TableLesson/>}/>
  )
}