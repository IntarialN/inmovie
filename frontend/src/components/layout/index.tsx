import './styles.scss';
import {FC, ReactNode} from "react";

type Props = {
  children: ReactNode;
  absolute?: boolean;
  fixed?: boolean;
}

export const Layout: FC<Props> = ({ children, absolute, fixed }) => {
  
  return (
    <div className={
      `container-layout
     ${
        fixed ? 'container-layout--fixed' :
          absolute ? 'container-layout--absolute' :
            ''
      }`
    }>
      <div className='container-layout-content'>
        { children }
      </div>
    </div>
  )
}
