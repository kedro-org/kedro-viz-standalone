import React from 'react';
import "@quantumblack/kedro-viz/lib/styles/styles.min.css";
import demo from '@quantumblack/kedro-viz/lib/utils/data/demo.mock.json';
import KedroViz from '@quantumblack/kedro-viz';

function app() {
  return (
    <div style={{ height: `90vh`, width: `100%` }}>
      <KedroViz
        data={demo}
        display={{
          globalToolbar: false,
          miniMap: false,
          expandAllPipelines: false,
          sidebar: false,
        }}
        visible={{
          labelBtn: false,
          layerBtn: false,
          exportBtn: false,
          pipelineBtn: false,
          sidebar: false,
        }}
        theme="dark"
      />
    </div>
  );
}

export default app;
