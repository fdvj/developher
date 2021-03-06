import React from 'react';
import './index.scss'

interface Props {
  children: JSX.Element;
  stepTitle: string;
  stepNo: number | "";
}

export default function Step(props: Props): JSX.Element {
  const { children, stepTitle, stepNo } = props;

  return (
    <>
      <div className="step">
        <div className="stepTitle">
          <p className="stepTitleText">{`${stepNo} - ${stepTitle}`}</p>
        </div>
        <div className="listPadding">{children}</div>
      </div>
      <br/>
    </>
  )
}
