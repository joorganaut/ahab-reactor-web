import React, { useLayoutEffect } from 'react';
import { MagnifiContainer } from './styled';

const MagnifiWidget: React.FC = () => {
    useLayoutEffect(() => {
        //@ts-ignore
        loadWidget()
      }, [])
      return <MagnifiContainer show={false} id={'widget-container'}></MagnifiContainer>
}
export default MagnifiWidget