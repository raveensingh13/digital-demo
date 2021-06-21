import CustomMenu from '../../components/Menu/Menu'
import { RouterOutlet } from '../RouterOutlet/RouterOutlet';


export const Layout = () => {
  return (
    <div>
      <CustomMenu />
      <RouterOutlet />
    </div>
  );
}
