import React from 'react';
import Panel from './Panel';
import InputBox from './InputBox';

function InputPanel() {

    return (
        <Panel childs={<InputBox />} />
    );
}

export default InputPanel