import React, { FunctionComponent } from 'react';

type SvgComponentProps = {
  svgString: string;
};

const SvgComponent: FunctionComponent<SvgComponentProps> = ({ svgString }) => (
  <div dangerouslySetInnerHTML={{ __html: svgString }}></div>
);

export default SvgComponent;