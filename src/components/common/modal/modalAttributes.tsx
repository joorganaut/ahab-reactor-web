import React from 'react';
import { Button } from '../button/button';
interface ModalAttributesProps {
  title: string;
  handleClick: (e: any) => void;
}

export const ModalAttributes: React.FC<ModalAttributesProps> = ({ ...props }) => {
  return (<>
    <div className="box-dialog">
      <div className="box-header">
        <h4 className="box-title">{props.title} &trade;</h4>
        <Button name={'closeButton'} type={'primary'} onClick={props.handleClick} className="close">
          ×
            </Button>
      </div>
      <div className="box-content">{props.children}
      </div>
      <div className="box-footer">
        {/* <Button type={'outline'} onClick={props.handleClick} className="close">
          {t('form.close')}
        </Button> */}
      </div>
    </div>
    <div
      className={`background`}
      onMouseDown={props.handleClick} />
  </>)
}