import React, {Fragment} from 'react'
import { Viewer } from '@react-pdf-viewer/core';
import "../pages/css/reglamento.css"
import '@react-pdf-viewer/core/lib/styles/index.css';
import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';
import { toolbarPlugin } from '@react-pdf-viewer/toolbar';
import '@react-pdf-viewer/toolbar/lib/styles/index.css';
function PdfViewer({fileUrl}) {
    const CustomTolbar = () => {
        return (
          <div className="toolbar_container">
            <Toolbar>{renderDefaultToolbar(transform)}</Toolbar>
          </div>
        );
    }
    const toolbarPluginInstance = toolbarPlugin();
    const transform= (ToolbarSlot) => ({
        ...ToolbarSlot,
        ShowSearchPopover: ()=><></>,
        SwitchTheme:()=><></>,
        SwitchThemeMenuItem: () => <></>,
        Open: () => <></>,
        OpenMenuItem:()=><></>,
        RotateBackwardMenuItem:()=><></>,
        RotateForwardMenuItem:()=><></>,
        Rotate:()=><></>,
        SwitchScrollModeMenuItem:()=><></>,
    });
    const { renderDefaultToolbar, Toolbar } = toolbarPluginInstance;
    const defaultLayoutPluginInstance = defaultLayoutPlugin({
         sidebarTabs: (defaultTabs) => [ 
            defaultTabs[0],
        ],
        renderToolbar: CustomTolbar, 
    });
  return(
    <Fragment>
        <Viewer fileUrl={fileUrl} plugins={[defaultLayoutPluginInstance, toolbarPluginInstance]}/>
    </Fragment>
  )
}

export default PdfViewer