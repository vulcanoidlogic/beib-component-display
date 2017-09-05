import React, { Component } from 'react';
import { textFieldUrl as renderUrl, textFieldSrcUrl as reactSourceUrl } from '../helpers/reactHelper';

const TextFieldPage = () => {
  return (
    <div>
      <h4>TextField Component</h4>
      <iframe title="TextField Component" src={renderUrl}
        className="component-iframe" />
      <br />
      <br />
      <h4>React Source Code</h4>
      <iframe title="TextField Component" src={reactSourceUrl}
        className="component-iframe" />
    </div>
  );
}

export default TextFieldPage;
